import { useState, useEffect } from 'react';
import {
	Box,
	Container,
	Flex,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Text,
	HStack,
	Center,
	Grid,
} from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';

async function fetcher(...arg) {
	const res = await fetch(...arg);

	return res.json();
}

const Repos = () => {
	const [repoName, setRepoName] = useState('');
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
								<Box
									key={index}
									p={5}
									mb={3}
									borderWidth='1px'
									rounded='lg'
									boxShadow={'md'}
									onClick={() => setRepoName(repo.name)}
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
										{/* {commits &&
											commits.map((commit, i) => {
												return <Text key={i}>Commits {commit.node_id}</Text>;
											})} */}
									</Stat>
								</Box>
							);
						})}
					</Grid>
				</Container>
			</>
		)
	);
};

export default Repos;
