const githubRepos = require('../pages/api/githubRepos');

describe('githubRepos', () => {
	test('should return data', async (done) => {
		expect.assertions(1);
		githubRepos.repos(fetch).then((data) => {
			expect(data).toEqual(expect.any(Array));
			done();
		});
	});

	test('the data is undefined', async () => {
		const data = await githubRepos();
		expect(data).toBeDefined;
	});
});
