import axios from "axios";

const GITHUB_USERNAME = "ReuelO";
const BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

export const fetchGitHubProfile = async () => {
  try {
    const profile = await axios.get(BASE_URL);
    return profile.data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return null;
  }
};

export const fetchGitHubRepos = async () => {
  try {
    const repos = await axios.get(`${BASE_URL}/repos`);
    return repos.data;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
};
