<?php

namespace OCA\User_SAML\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use OCA\User_SAML\UserBackend;
use OCP\IUserManager;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\User\Events\UserChangedEvent;



class CreateUser extends Command
{

	/** @var UserBackend */
	private $UserBackend;
	/** @var IUserManager */
	private $userManager;

	public function __construct(
		UserBackend $userBackend,
		IUserManager $userManager
	) {
		parent::__construct();
		$this->userBackend = $userBackend;
		$this->userManager = $userManager;
	}

	protected function configure()
	{
		$this->setName('saml:user:create')
			->setDescription('create user')
			->addArgument(
				'uid',
				InputArgument::REQUIRED,
				'uid'
			)
			->addArgument(
				'displayname',
				InputArgument::REQUIRED,
				'displayname'
			)
			->addArgument(
				'mail',
				InputArgument::REQUIRED,
				'mail'
			)
			->addArgument(
				'b64',
				InputArgument::OPTIONAL,
				'b64'
			);
	}

	/**
	 * @param InputInterface $input
	 * @param OutputInterface $output
	 * @return void
	 */
	protected function execute(InputInterface $input, OutputInterface $output)
	{
		$uid = $input->getArgument('uid');
		$displayname = $input->getArgument('displayname');
		$mail = $input->getArgument('mail');
		$b64 = $input->getArgument('b64');

		if (isset($b64) && intval($b64)) {
			$uid = base64_decode($uid);
			$displayname = base64_decode($displayname);
			$mail = base64_decode($mail);
		}

		$this->userBackend->createUserIfNotExists($uid);
		$user = $this->userManager->get($uid);

		if ($user !== null) {
			if ($mail && !empty($mail) && $mail != 'None'){
				$user->setEMailAddress($mail);
			}
			$dispatcher = \OC::$server->get(IEventDispatcher::class);
			$dispatcher->dispatchTyped(new UserChangedEvent($user, 'displayName', $displayname));
			$this->userBackend->setDisplayName($uid, $displayname);
		}
	}
}
