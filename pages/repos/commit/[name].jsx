import { Box, Stat, StatHelpText, StatLabel, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import githubCommits from '../../api/githubCommits';
import useSWR from 'swr';

const Commit = ({}) => {
	const router = useRouter();
	const { name } = router.query;

	const { data, error } = useSWR(name, githubCommits);
	console.log(data);

	return (
		<>
			<Box>
				<Text>Commits</Text>
				{data?.commits.map((commit, index) => {
					return (
						<Box
							key={index}
							p={5}
							mb={3}
							borderWidth='1px'
							rounded='lg'
							boxShadow={'md'}
						>
							<Stat>
								<StatLabel fontSize='xl'>{commit?.commit?.message}</StatLabel>
								<StatHelpText color='teal.300' noOfLines={2}>
									{commit?.author?.login}
								</StatHelpText>
							</Stat>
						</Box>
					);
				})}
			</Box>
		</>
	);
};

export default Commit;
