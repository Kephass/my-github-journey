import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Commit = ({ message, sha }) => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Box>
				<Text>Commit run{sha}</Text>
				<Text>Commit run{message}</Text>
			</Box>
		</>
	);
};

export default Commit;
