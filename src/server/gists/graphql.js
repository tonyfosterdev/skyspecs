import {
  getGistsByUser,
  getGistById,
  getFavoritedGists,
  favoriteGist,
  unfavoriteGist
} from './service';

export const schema = `
  type File {
    filename: String!
    type: String!,
    language: String,
    url: String!,
    size: Int
  }

  type Gist {
    id: String!
    description: String
    createdAt: String!,
    createdBy: String!,
    avatarUrl: String,
    files: [File],
    favorited: Boolean
  }

  type Query {
    gistsByUser(username: String): [Gist]!
    favoritedGists: [Gist]!
  }

  type Mutation {
    favoriteGist(gistId: String): Gist
    unfavoriteGist(gistId: String): Gist
  }
`;

export const resolver = {
  gistsByUser: ({ username }) => getGistsByUser(username),
  favoritedGists: () => getFavoritedGists(),
  favoriteGist: ({ gistId }) => favoriteGist(gistId),
  unfavoriteGist: ({ gistId }) => unfavoriteGist(gistId),
};
