const baseUrl = 'http://localhost:5000/svda-24741/us-central1'; // TODO add as env var

export default {
  fetch: async (path: string) => {
    const response = await fetch(`${baseUrl}${path}`);
    const data = await response.json();
    return data;
  },
}