import { Heading, Image, Card, Stack,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, Popover, PopoverTrigger, PopoverHeader, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Text, Link } from '@chakra-ui/react';
import Product from '../components/product';

export default function ProteinCard({product}){

	const popover = (product) => {

		return (
			<Popover>
				<PopoverTrigger>
					<Button size='md' variant='link' whiteSpace='unset' colorScheme='black' justifyContent='flex-start'>
					<Text overflowWrap='break-word'>{product.name}</Text>
					</Button>
					
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverHeader>Amazon</PopoverHeader>
					<PopoverBody>
					<SimpleGrid columns={2} spacing={2}>
					{product.tastes.map(taste => <Button as='a' variant='outline' href={taste.url.amazon} size='sm' whiteSpace='unset'><Text fontSize='xs' overflowWrap='break-word'>{taste.name}</Text></Button>)}
					</SimpleGrid>
					</PopoverBody>
					</PopoverContent>
			</Popover>
		);
	}

	const Tastes = (product) => {
		return (
			<div>
			</div>
		);
	}

	const alt = `${product.name}_image`;
	return (
		<Card maxW='2xs'>
			<CardBody>
	
				<Image src={product.imgUrl} alt={alt} objectFit='cover' />
	
				<Stack mt='6' spacing='3'>
					{popover(product)}
					<Link href={product.company.url}>{product.company.name}</Link>
				</Stack>
	
			</CardBody>
		</Card>
	);
}
