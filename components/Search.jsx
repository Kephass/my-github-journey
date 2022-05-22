import { FaSearch } from 'react-icons/fa';
import {
	Box,
	Button,
	Container,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { searchStateAtom } from '../data/atoms';

const Search = () => {
	const [searchText, setSearchText] = useRecoilState(searchStateAtom);

	const handleSearch = (event) => {
		setSearchText(event.target.value);
		console.log(searchText);
	};

	return (
		<Box width='30%' margin='0 auto'>
			<InputGroup size='md'>
				<Input
					pr='4.5rem'
					value={searchText}
					onChange={handleSearch}
					placeholder='Search commits'
					borderRadius='full'
				/>
				<InputRightElement width='4.5rem'>
					<Button
						h='1.75rem'
						size='sm'
						borderRadius='full'
						bgColor='transparent'
					>
						<FaSearch />
					</Button>
				</InputRightElement>
			</InputGroup>
		</Box>
	);
};

export default Search;
