<?php

declare(strict_types=1);

namespace OCA\User_SAML\Collaboration\v2;

use OC\Share20\Share;
use OCP\Collaboration\Collaborators\ISearchPlugin;
use OCP\Collaboration\Collaborators\ISearchResult;
use OCP\Collaboration\Collaborators\SearchResultType;
use OCP\IRequest;
use OCA\User_SAML\UserBackend;
use OCA\User_SAML\LocalUsers;

class CollaboratorSearchPlugin implements ISearchPlugin
{

	/** @var IRequest */
	private $request;

	/** @var UserBackend */
	private $userBackend;

	/** @var LocalUsers */
	private $LocalUsers;

	public function __construct(
		IRequest $request,
		UserBackend $userBackend,
		LocalUsers $LocalUsers,
	) {
		$this->request = $request;
		$this->userBackend = $userBackend;
		$this->LocalUsers = $LocalUsers;
	}

	/**
	 * @param string $search
	 * @param int $limit
	 * @param int $offset
	 * @param ISearchResult $searchResult
	 *
	 * @return bool
	 */
	public function search($search, $limit, $offset, ISearchResult $searchResult): bool
	{
		$wide = $exact = [];
		$search_lower = trim(strtolower($search));

		$users = $this->LocalUsers->getUsers();

		if (empty($users)) {
			return false;
		}

		$users_found = [];
		foreach ($users as $user) {
			if (strtolower($user['ID']) == $search_lower) {
				if (!$this->userBackend->userExists($user['ID'])) {
					$user['match'] = 100;
					$users_found[] = $user;
					continue;
				}
			}
			if (strtolower($user['NAME']) == $search_lower) {
				if (!$this->userBackend->userExists($user['ID'])) {
					$user['match'] = 100;
					$users_found[] = $user;
					continue;
				}
			}
			if (strtolower($user['MAIL']) == $search_lower || str_replace('@tu-braunschweig.de', '@', strtolower($user['MAIL'])) == $search_lower || str_replace('@tu-braunschweig.de', '@tu-bs.de', strtolower($user['MAIL'])) == $search_lower) {
				if (!$this->userBackend->userExists($user['ID'])) {
					$user['match'] = 100;
					$users_found[] = $user;
					continue;
				}
			}
			if (str_contains($search_lower, '@') && strlen($search_lower) >= 3) {
				if (str_contains(strtolower($user['MAIL']), $search_lower) || str_contains(str_replace('@tu-braunschweig.de', '@tu-bs.de', strtolower($user['MAIL'])), $search_lower)) {
					if (!$this->userBackend->userExists($user['ID'])) {
						$perc = 0;
						similar_text(strtolower($user['MAIL']), $search_lower, $perc);
						$user['match'] = intval(round($perc));
						$users_found[] = $user;
						continue;
					}
				}
			}
			if (str_contains($search_lower, ' ') && strlen($search_lower) >= 3) {
				if (str_contains(strtolower($user['NAME']), $search_lower)) {
					if (!$this->userBackend->userExists($user['ID'])) {
						$perc = 0;
						similar_text(strtolower($user['NAME']), $search_lower, $perc);
						$user['match'] = intval(round($perc));
						$users_found[] = $user;
						continue;
					}
				}
			}
			if (strlen($search_lower) >= 6) {
				if (str_contains(strtolower($user['MAIL']), $search_lower)) {
					if (!$this->userBackend->userExists($user['ID'])) {
						$perc = 0;
						similar_text(strtolower($user['MAIL']), $search_lower, $perc);
						$user['match'] = intval(round($perc));
						$users_found[] = $user;
						continue;
					}
				}
			}
			if (strlen($search_lower) >= 4) {
				if (str_contains(strtolower($user['NAME']), $search_lower)) {
					if (!$this->userBackend->userExists($user['ID'])) {
						$perc = 0;
						similar_text(strtolower($user['NAME']), $search_lower, $perc);
						$user['match'] = intval(round($perc));
						$users_found[] = $user;
						continue;
					}
				}
			}
		}

		usort($users_found, function ($a, $b) {
			return $a['match'] <=> $b['match'];
		});

		$users_found = array_slice($users_found, $offset, $limit);

		foreach ($users_found as $user) {
			if (!$this->userBackend->userExists($user['ID'], true)) {
				$entry = $this->addResultEntry($user['NAME'], $user['MAIL'], $user['ID']);
				if (strtolower($user['NAME']) === $search_lower || strtolower($user['MAIL']) === $search_lower || strtolower($user['ID']) === $search_lower) {
					$exact[] = $entry;
				} else {
					$wide[] = $entry;
				}
			}
		}

		$type = new SearchResultType('users');
		$searchResult->addResultSet($type, $wide, $exact);

		return false;
	}

	private function addResultEntry($label, $shareWithDescription, $shareWith): array
	{
		return [
			'label' => $label,
			'shareWithDescription' => $shareWithDescription,
			'value' => [
				'shareType' => Share::TYPE_USER,
				'shareWith' => $shareWith
			],
		];
	}
}
