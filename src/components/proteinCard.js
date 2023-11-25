import { Heading, Image, Card, Stack,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { Tab, Tabs, TabList, TabPanels, TabPanel, Divider } from '@chakra-ui/react';
import { Text, Link } from '@chakra-ui/react';
import Product from '../components/product';

export default function ProteinCard({product}){

	const popover = (product) => {

		return (
			<Popover>
				<PopoverTrigger>
					<Button size='md'>リンク</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverBody>
					{Tastes(product)}
					</PopoverBody>
					</PopoverContent>
			</Popover>
		);
	}

	const Tastes = (product) => {
		return (
			<Tabs variant='soft-rounded' size='sm'>
				<TabList>
				{product.tastes.map(taste => <Tab>{taste.name}</Tab>)}
				</TabList>
			<Divider />
			<TabPanels>
				{product.tastes.map(taste => 
				<TabPanel>
					<Button as='a' variant='outline' href={taste.url.amazon}>Amazon</Button>
				</TabPanel>)}
			</TabPanels>
			</Tabs>
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
