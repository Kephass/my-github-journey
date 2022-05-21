const { Octokit } = require('@octokit/rest');

const githubCommits = async (name) => {
	try {
		const octokit = new Octokit({
			auth: process.env.GITHUB_AUTH_TOKEN,
		});

		// Get all my repo's commits
		const response = await octokit.request(`/repos/Kephass/${name}/commits`);
		return {
			commits: response?.data,
		};
	} catch (err) {
		console.log(err);
	}
};

export default githubCommits;
