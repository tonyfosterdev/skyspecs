import {
  listByUser,
} from '../lib/github-gists';

function mapToResult({
  id,
  description,
  created_at: createdAt,
  owner,
  files,
}) {
  const fileArray = !files ? [] : Object.keys(files).map((filename) => {
    const { type, language, raw_url: url, size } = files[filename];
    return {
      filename,
      type,
      language,
      url,
      size,
    };
  });
  const { login: createdBy, avatar_url: avatarUrl } = owner;
  return {
    id,
    createdAt,
    createdBy,
    avatarUrl,
    description,
    files: fileArray,
    favorited: false,
  };
}

export async function getGistsByUser(username) {
  const gists = await listByUser(username);
  return gists.map(mapToResult);
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
