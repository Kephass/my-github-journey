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
import { useRecoilValue } from 'recoil';
import { searchStateAtom } from '../../../data/atoms';
import Search from '../../../components/Search';

const Commit = (index) => {
	const router = useRouter();
	const { name } = router.query;
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
										<HStack color='teal.300' fontSize='0.8rem'>
											<Box>
												<DiLinux />
											</Box>
											<Text>{commit?.author?.login}</Text>
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
