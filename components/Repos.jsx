import {
	Box,
	Container,
	Stat,
	StatHelpText,
	StatLabel,
	Text,
	Grid,
	HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';
import ReactTimeAgo from 'react-time-ago';

async function fetcher(...arg) {
	const res = await fetch(...arg);

	return res.json();
}

const Repos = () => {
	const { data, error } = useSWR('/api/githubRepos', fetcher);

	return (
		data && (
			<>
				<Container maxWidth='90%'>
					<Grid
						py='32px'
						gap='10'
						templateColumns={{
							base: 'repeat(auto-fill, minmax(250px, 1fr))',
							md: 'repeat(auto-fill, minmax(350px, 1fr))',
						}}
					>
						{data.repos.data.map((repo, index) => {
							return (
								<Link
									as={`/repos/commit/${repo.name}`}
									href={`/repos/commit/${repo.name}`}
									key={index}
								>
									<a>
										<Box
											p={5}
											mb={3}
											borderWidth='1px'
											rounded='lg'
											boxShadow={'md'}
										>
											<Stat>
												<StatLabel fontSize='xl'>
													{repo.name}
													<Text
														as='span'
														fontSize='.7rem'
														mx='2'
														py='1'
														px='3'
														borderWidth='1px'
														borderRadius='xl'
													>
														{repo.visibility}
													</Text>
												</StatLabel>
												<StatHelpText color='teal.300' noOfLines={2}>
													<Text>{data ? repo.description : 'Loading'}</Text>
												</StatHelpText>
												<HStack fontSize='.7rem'>
													<Text>{repo?.language}</Text>
													<Text>{repo?.license?.name}</Text>
													<ReactTimeAgo
														date={repo?.updated_at}
														locale='en-US'
													/>
												</HStack>
											</Stat>
										</Box>
									</a>
								</Link>
							);
						})}
					</Grid>
				</Container>
			</>
		)
	);
};

export default Repos;
