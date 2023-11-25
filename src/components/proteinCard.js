import { Heading, Image, Card, Stack,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, Popover, PopoverTrigger, PopoverHeader, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { Tab, Tabs, TabList, TabPanels, TabPanel, Divider } from '@chakra-ui/react';
import { Text, Link } from '@chakra-ui/react';
import Product from '../components/product';

export default function ProteinCard({product}){

	const popover = (product) => {

		return (
			<Popover minW='max-content'>
				<PopoverTrigger>
					<Button size='md'>リンク</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverHeader>Amazon</PopoverHeader>
					<PopoverBody>
					{product.tastes.map(taste => <Button as='a' variant='outline' href={taste.url.amazon}>{taste.name}</Button>)}
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
					<Heading size='md'>{product.name}</Heading>
					<Link href={product.company.url}>{product.company.name}</Link>
					{popover(product)}
				</Stack>
	
			</CardBody>
		</Card>
	);
}
