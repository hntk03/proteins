import { Heading, Image, Card, Stack,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Product from '../components/product';

//export default function ProteinCard({productName, companyName, imgUrl}){
export default function ProteinCard({product}){
	const alt = `${product.name}_image`;
	return (
		<Card maxW='2xs'>
			<CardBody>
	
				<Image src={product.imgUrl} alt={alt} objectFit='cover' />
	
				<Stack mt='6' spacing='3'>
					<Heading size='md'>{product.name}</Heading>
					<Text as='u'>{product.company}</Text>
				</Stack>
	
			</CardBody>
		</Card>
	);
}
