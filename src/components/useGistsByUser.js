import { useQuery, gql } from '@apollo/client';

export function useGistsByUser(username) {
  return useQuery(gql`
    query getGistsByUser($username: String) {
      gistsByUser(username: $username) {
        id,
        createdAt,
        createdBy,
        avatarUrl,
        description,
        files {
    	    filename,
          type,
          language,
          url,
          size
        },
        favorited
      }
    }`, {
    variables: { username },
  });
}