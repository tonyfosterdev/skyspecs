const fakeGist = {
  id: 'foo'
};

export function getGistsByUser(username) {
  return [fakeGist];
}

export function getGistById(gistId) {
  return fakeGist;
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
