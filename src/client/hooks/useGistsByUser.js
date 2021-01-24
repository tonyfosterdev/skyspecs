import { useQuery, gql } from '@apollo/client';

/*
 * This hook is stored here to keep it consistent. This should help
 * ensure cached results are used.
 */

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