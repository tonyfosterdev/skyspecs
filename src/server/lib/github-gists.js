import { fetchFromGithubApi } from './github';

export function listByUser(username) {
  return fetchFromGithubApi(`/users/${username}/gists`);
}

export function getById(gistId) {
  return fetchFromGithubApi(`/gists/${gistId}`);
}
