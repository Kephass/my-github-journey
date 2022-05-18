import useSWR from 'swr';
import {
	Box,
	Divider,
	Flex,
	Heading,
	Stat,
	StatLabel,
	StatNumber,
	Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

async function fetcher(...arg) {
	const res = await fetch(...arg);

	return res.json();
}

const Home = () => {
	const { data, error } = useSWR('/api/github', fetcher);
	return (
		<Box mt='70px' className={styles.container}>
			<Head>
				<title>My Github Journey</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box margin='0 auto' minHeight='980px'>
				<Heading as='h1' textAlign='center'>
					Welcome to <a href='https://github.com/Kephass'>my github journey</a>
				</Heading>
				<Flex justify='center' gap={10} my={10}>
					<Box w='300px' p={5} ml={8} mb={3} borderWidth='1px' rounded='lg'>
						<Stat>
							<StatLabel fontSize='xl'>Github stars</StatLabel>
							<StatNumber color='teal.300'>
								{data ? data.stars : 'Loading'}
							</StatNumber>
						</Stat>
					</Box>
					<Box>
						<Stat w='300px' p={5} borderWidth='1px' rounded='lg'>
							<StatLabel fontSize='xl'>Github Followers</StatLabel>
							<StatNumber color='teal.300'>
								{data ? data.followers : 'Loading'}
							</StatNumber>
						</Stat>
					</Box>
					<Box>
						<Stat w='300px' p={5} borderWidth='1px' rounded='lg'>
							<StatLabel fontSize='xl'>{`Repos I've starred`}</StatLabel>
							<StatNumber color='teal.300'>
								{data ? data.starred : 'Loading'}
							</StatNumber>
						</Stat>
					</Box>
				</Flex>
			</Box>

			<Box textAlign='center' alignSelf='flex-end'>
				<Divider></Divider>
				<Text padding='3'>
					Created by{' '}
					<Text as={'span'} fontWeight='bold' color={'teal.400'}>
						Felix Oduro
					</Text>
				</Text>
			</Box>
		</Box>
	);
};

export default Home;
