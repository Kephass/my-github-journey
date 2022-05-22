import { Box, Divider, Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box textAlign='center' alignSelf='flex-end' marginTop='100px'>
			<Divider></Divider>
			<Text padding='3'>
				Created by{' '}
				<Text as={'span'} fontWeight='bold' color={'teal.400'}>
					Felix Oduro
				</Text>
			</Text>
		</Box>
	);
};

export default Footer;
