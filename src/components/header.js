import { Heading, Box } from '@chakra-ui/react';
import { Link } from 'next/link';

export default function Header (){
	return(
		<header>
			<Box background={'#776B5D'}>
			<Heading color={'white'}>
						Proteins
			</Heading>
			</Box>
		</header>
	)
}
