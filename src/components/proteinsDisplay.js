import ProteinCard from '../components/proteinCard';
import Product from '../components/product';
import ProteinTag from '../components/proteinTag';
import Taste from '../components/taste';
import Url from '../components/url';
import Company from '../components/company';
import { Text, SimpleGrid } from '@chakra-ui/react';

const Ultra = new Company('ULTORA', 'https://ultora.co.jp/');
const Belegend = new Company('ビーレジェンド', 'https://store.belegend.jp/');

const p1 = new Product(
	'ホエイダイエットプロテイン(1000g)',
	Ultra,
	'https://d2w53g1q050m78.cloudfront.net/ultoracojp/ec_assets/f528590ab77be8f8ff6a9d79399b144e0f9d5194-original.?1694423344',
	[ ProteinTag.Whey ],
	[
		new Taste(
			'クリアストロベリー風味',
			new Url('https://amzn.asia/d/65maeHJ')),
		new Taste(
			'ほうじ茶',
			new Url('https://amzn.asia/d/6ZTUKG8')),
	]
);

const p2 = new Product(
	'ソイダイエットプロテイン(500g)',
	Ultra,
	'https://d2w53g1q050m78.cloudfront.net/ultoracojp/ec_assets/be8b287d287d81d7717a469e36087ef148f8c78b-original.png?1696919045',
	[ ProteinTag.Soy ],
	[
		new Taste(
			'バナナ',
			new Url('https://amzn.asia/d/bHvnfRh')),
		new Taste(
			'ココア',
			new Url('https://amzn.asia/d/aoAbCyC')),
		new Taste(
			'ミルクティー',
			new Url('https://amzn.asia/d/cOt7pjX')),
	]
);

const p3 = new Product(
	'WPCプロテイン',
	Belegend,
	'https://store.belegend.jp/client_info/REALSTYLE/itemimage/BLPC07AP1/BLPC07AP_01.jpg',
	[ ProteinTag.Whey ],
	[
		new Taste(
			'激うまチョコ風味',
			new Url('https://amzn.asia/d/fV6K6ca')),
	]
);

export default function ProteinsDisplay({tags}){
	const proteins = [p1, p2, p3];
	const filtered  = [];

	for(let p=0;p<proteins.length;p++){
		for(let t=0;t<tags.length;t++){
			proteins[p].tags.includes(tags[t]) && filtered.push(proteins[p]);
		}
	}

	!filtered.length && filtered.push(...proteins);

	const num = filtered.length;
	return (
		<div>
		<Text>{num}個のプロテインが見つかりました</Text>
		<SimpleGrid columns={3} spacing={3}>
		{ filtered.map(protein => <ProteinCard product={protein} />) }
		</SimpleGrid>
		</div>
	);
}
