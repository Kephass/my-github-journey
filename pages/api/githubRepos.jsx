const { Octokit } = require('@octokit/rest');

const githubRepos = async (req, res) => {
	try {
		const octokit = new Octokit({
			auth: process.env.GITHUB_AUTH_TOKEN,
		});

		// Get all my repos
		const repos = await octokit.request('/users/Kephass/repos');
		console.log(repos.data);

		return res.status(200).json({
			repos: repos.data,
		});
	} catch (err) {
		console.log(err);
	}
};
console.log(githubRepos.repos);

module.exports = githubRepos;
