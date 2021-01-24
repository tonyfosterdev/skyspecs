import { fetchFromGithubApi } from './github';

// These functions will call into the default GitHub API fetch code

export function listByUser(username) {
  return fetchFromGithubApi(`/users/${username}/gists`);
}

export function getById(gistId) {
  return fetchFromGithubApi(`/gists/${gistId}`);
}
