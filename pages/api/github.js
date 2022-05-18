const { Octokit } = require('@octokit/rest');

export default async (req, res) => {
	const octokit = new Octokit({
		auth: process.env.GITHUB_AUTH_TOKEN,
	});

	// Get all my repos
	const repos = await octokit.request('/users/Kephass/repos');

	// Get my followers
	const followers = await octokit.request(
		'/users/Kephass/followers?per_page=100'
	);
	const followerCount = followers.data.length;

	// Get the star count from all my repos
	const starsCount = repos.data
		.filter((repo) => !repo.false)
		.reduce((acc, item) => {
			return acc + item.stargazers_count;
		}, 0);

	// Get repos that I've starred
	const reposStarred = await octokit.request('/users/Kephass/starred');
	const reposStarredCount = reposStarred.data.length;

	return res.status(200).json({
		repos: repos,
		stars: starsCount,
		followers: followerCount,
		starred: reposStarredCount,
	});
};
