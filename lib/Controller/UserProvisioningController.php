<?php

namespace OCA\User_SAML\Controller;

use OCP\AppFramework\OCSController;
use OCP\AppFramework\Http\DataResponse;
use OCP\IConfig;
use OCP\IRequest;
use OCP\IUserManager;
use OCA\User_SAML\UserBackend;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\User\Events\UserChangedEvent;

class UserProvisioningController extends OCSController
{

	public function __construct(
		$appName,
		IRequest $request,
		IConfig $config,
		UserBackend $userBackend,
		IUserManager $userManager
	) {
		parent::__construct($appName, $request);
		$this->config = $config;
		$this->userBackend = $userBackend;
		$this->userManager = $userManager;
	}

	public function createUser($uid = null, $displayname = null, $mail = null, $quota = null): DataResponse
	{
		if ($uid !== null) {
			$this->userBackend->createUserIfNotExists($uid);
			$user = $this->userManager->get($uid);

			if ($user !== null) {
				if ($mail !== null) {
					$user->setEMailAddress($mail);
				}
				if ($quota !== null) {
					$user->setQuota($quota);
				}
				if ($displayname !== null) {
					if (strpos($displayname, $uid) === false) {
						$displayname = $displayname . ' (' . $uid . ')';
					}
					$dispatcher = \OC::$server->get(IEventDispatcher::class);
					$dispatcher->dispatchTyped(new UserChangedEvent($user, 'displayName', $displayname));
					$this->userBackend->setDisplayName($uid, $displayname);
				}

				return new DataResponse(['uid' => $uid]);
			}
		}
		return new DataResponse(['uid' => NULL]);
	}
}
