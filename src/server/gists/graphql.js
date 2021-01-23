import {
  getGistsByUser,
  getGistById,
  getFavoritedGists,
  favoriteGist,
  unfavoriteGist
} from './service';

/*
  Your API should expose an endpoint/query that, given a username, returns the
  public gists for that particular user

  Your API should expose an endpoint/query that, given a gist ID, returns a
  specific gist

  Your API should expose an endpoint/mutation that, given a gist ID, marks the
  gist as favorited

  Your API should expose an endpoint/mutation that, given a gist ID, marks the
  gist as not-favorited

  Your API should expose an endpoint/query that returns all gists marked as
  favorites.

  You don't have to worry about authentication; you may assume that this app
  will only be used by a single user, and that all favorites are for that single user
*/

export const schema = `
  type Gist {
    id: String!
    favorited: Boolean
  }

  type GistFavoriteState {
    id: String!
    favorited: Boolean!
  }

  type Query {
    gistsByUser(username: String): [Gist]!
    gistById(gistId: String): Gist
    favoritedGists: [Gist]!
  }

  type Mutation {
    favoriteGist(gistId: String): GistFavoriteState
    unfavoriteGist(gistId: String): GistFavoriteState
  }
`;

export const resolver = {
  gistsByUser: ({ username }) => getGistsByUser(username),
  gistById: ({ gistId }) => getGistById(gistId),
  favoritedGists: () => getFavoritedGists(),
  favoriteGist: ({ gistId }) => favoriteGist(gistId),
  unfavoriteGist: ({ gistId }) => unfavoriteGist(gistId),
};
