import fetch, { Headers } from 'node-fetch';

export async function fetchFromGithubApi(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: new Headers({
      accept: 'application/vnd.github.v3+json'
    }),
  });

  // Throw and error if it didn't succeed.
  if (!response.ok) {
    throw new Error(`Failed calling ${path}`);
  }

  // Return the JSON
  return await response.json();
}
