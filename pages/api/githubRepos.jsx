const { Octokit } = require('@octokit/rest');

const githubRepos = async (req, res) => {
	const octokit = new Octokit({
		auth: process.env.GITHUB_AUTH_TOKEN,
	});

	// Get user
	const owner = await octokit.request('/users/Kephass');

	// Get all my repos
	const repos = await octokit.request('/users/Kephass/repos');

	//Get repo name from repos

	// Get commits
	// commits = await octokit.request('/repos/Kephass/`)

	return res.status(200).json({
		repos: repoName,
	});
};

export default githubRepos;
