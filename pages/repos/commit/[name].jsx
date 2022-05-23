import {
	Box,
	Container,
	HStack,
	Stat,
	StatLabel,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { DiLinux } from 'react-icons/di';
import githubCommits from '../../api/githubCommits';
import useSWR from 'swr';
import ReactTimeAgo from 'react-time-ago';
import { useRecoilValue } from 'recoil';
import { searchStateAtom } from '../../../data/atoms';
import Search from '../../../components/Search';

const Commit = () => {
	const router = useRouter();
	const { name, index } = router.query;
	const { data, error } = useSWR(name, githubCommits);

	// Search through the commits
	const searchInput = useRecoilValue(searchStateAtom);
	const filtered = data?.commits.filter((commit) =>
		commit?.commit?.message
			?.toLowerCase()
			.includes(searchInput?.toLocaleLowerCase())
	);

	return (
		<>
			<Container maxWidth='80%'>
				<Box>
					<Search />
					<Container maxWidth='60%' mt={'16'}>
						{filtered?.map((commit, index) => {
							return (
								<Box
									key={index}
									p={3}
									mb={3}
									borderWidth='1px'
									rounded='lg'
									boxShadow={'sm'}
								>
									<Stat>
										<StatLabel fontSize='sm' noOfLines={2}>
											{commit?.commit?.message}
										</StatLabel>
										<HStack fontSize='0.8rem'>
											<Box color='teal.400'>
												<DiLinux />
											</Box>
											<Text color='teal.400'>{commit?.author?.login}</Text>
											<Text color='gray.400'>
												commited{' '}
												<ReactTimeAgo
													date={commit?.commit?.committer?.date}
													locale='en-US'
												/>
											</Text>
										</HStack>
									</Stat>
								</Box>
							);
						})}
					</Container>
				</Box>
			</Container>
		</>
	);
};

export default Commit;
