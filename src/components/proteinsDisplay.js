import ProteinCard from '../components/proteinCard';
import Product from '../components/product';
import ProteinTag from '../components/proteinTag';
import { Stack, Text } from '@chakra-ui/react';

const p1 = new Product(
	'ホエイダイエットプロテイン(1000g)',
	'ULTORA',
	'https://d2w53g1q050m78.cloudfront.net/ultoracojp/ec_assets/f528590ab77be8f8ff6a9d79399b144e0f9d5194-original.?1694423344',
	[ ProteinTag.Whey ]
);

const p2 = new Product(
	'ソイダイエットプロテイン(500g)',
	'ULTORA',
	'https://d2w53g1q050m78.cloudfront.net/ultoracojp/ec_assets/be8b287d287d81d7717a469e36087ef148f8c78b-original.png?1696919045',
	[ ProteinTag.Soy ]
);

const p3 = new Product(
	'WPCプロテイン',
	'ビーレジェンド',
	'https://store.belegend.jp/client_info/REALSTYLE/itemimage/BLPC07AP1/BLPC07AP_01.jpg',
	[ ProteinTag.Whey ]
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
		<Stack direction='row'>
		{ filtered.map(protein => <ProteinCard product={protein} />) }
		</Stack>
		</div>
	);
}
