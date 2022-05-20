import useSWR from 'swr';
import {
	Box,
	Center,
	CircularProgress,
	Container,
	Divider,
	Flex,
	Grid,
	Heading,
	Link,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';

async function fetcher(...arg) {
	const res = await fetch(...arg);

	return res.json();
}

const Home = () => {
	const { data, error } = useSWR('/api/githubStats', fetcher);
	const cards = [
		{
			lable: 'Github stars',
			value: data && data.stars,
		},
		{
			lable: 'Github followers',
			value: data && data.followers,
		},
		{
			lable: `Repos I've starred`,
			value: data && data.starred,
		},
	];
	if (error) return alert(error.message);
	console.log(data);
	return (
		<Container mt='70px' width='80%' maxWidth='1200px'>
			<Head>
				<title>My Github Journey</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box height='80vh'>
				<Heading as='h1' textAlign='center'>
					Welcome to{' '}
					<Link href='https://github.com/Kephass' isExternal>
						<Text as='span' color='gray.400'>
							my public github journey
						</Text>
					</Link>
				</Heading>
				<SimpleGrid mt={'10'} minChildWidth='250px' spacingX='10px'>
					{cards.map((card, index) => {
						return (
							<Box
								key={index}
								w='300px'
								p={5}
								mb={3}
								mx='3'
								borderWidth='1px'
								rounded='lg'
							>
								<Stat>
									<StatLabel fontSize='xl'>{card.lable}</StatLabel>
									<StatNumber color='teal.300'>
										{data ? (
											card.value
										) : (
											<CircularProgress isIndeterminate color='teal.300' />
										)}
									</StatNumber>
								</Stat>
							</Box>
						);
					})}
				</SimpleGrid>
			</Box>
		</Container>
	);
};

export default Home;
