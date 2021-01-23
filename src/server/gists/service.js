import {
  listByUser,
  getById,
} from '../lib/github-gists';

function mapToResult({ id, description, }) {
  return {
    id,
    description,
    favorited: false,
  };
}

export async function getGistsByUser(username) {
  const gists = await listByUser(username);
  return gists.map(mapToResult);
}

export async function getGistById(gistId) {
  return mapToResult(await getById(gistId));
}

export function getFavoritedGists() {
  return [];
}

export function favoriteGist(gistId) {
  return {
    id: gistId,
    favorited: true,
  };
}

export function unfavoriteGist(gistId) {
  return {
    id: gistId,
    favorited: false,
  };
}
