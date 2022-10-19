<?php

namespace OCA\User_SAML;

use OCP\ICacheFactory;
use OCP\ICache;
use OCP\ILogger;
use OCP\IConfig;

class LocalUsers
{
	/** @var ICache */
	private $cache;
	/** @var ILogger */
	private $logger;
	/** @var IConfig */
	private $config;

	public function __construct(
		ICacheFactory $cacheFactory,
		ILogger $logger,
		IConfig $config,
	) {
		$this->cache = $cacheFactory->createDistributed('user_saml');
		$this->logger = $logger;
		$this->config = $config;
	}

	public function getUsers($reload = false)
	{
		if (!$reload) {
			$cacheValue = $this->cache->get('LocalUsers');

			if ($cacheValue !== null) {
				return json_decode(base64_decode($cacheValue), true);
			}
		}

		$value = [];
		$fileContent = '';
		$path = $this->config->getAppValue('user_saml', 'general-localUserFilePath', null);
		if ($path === null) {
			return [];
		}

		try {
			$fileContent = file_get_contents($path);
		} catch (\Throwable $e) {
			$this->logger->error('SAML LocalUsers - {e}', ['e' => $e]);
			return [];
		}

		foreach (json_decode($fileContent, true) as $item) {
			if (isset($item['U_ID']) && isset($item['MAIL']) && isset($item['NAME'])) {
				$value[] = [
					'ID' => $item['U_ID'],
					'MAIL' => $item['MAIL'],
					'NAME' => $item['NAME'],
					'COMMON_MAIL' => $item['MAIL'],
				];
			}
		}

		$this->cache->set('LocalUsers', base64_encode(json_encode($value)), 3600);

		return $value;
	}

	public function getUser($uid)
	{
		foreach ($this->getUsers() as $user) {
			if ($user['ID'] === $uid) {
				return $user;
			}
		}

		return null;
	}
}
