import ProteinCard from '../components/proteinCard';
import Product from '../components/product';
import { Stack } from '@chakra-ui/react';

const p1 = new Product(
	'ホエイダイエットプロテイン(1000g)',
	'ULTORA',
	'https://d2w53g1q050m78.cloudfront.net/ultoracojp/ec_assets/f528590ab77be8f8ff6a9d79399b144e0f9d5194-original.?1694423344'
);

const p2 = new Product(
	'WPCプロテイン',
	'ビーレジェンド',
	'https://store.belegend.jp/client_info/REALSTYLE/itemimage/BLPC07AP1/BLPC07AP_01.jpg'
);


export default function ProteinsDisplay(){
	return (
		<div>
		<Stack direction='row'>
		<ProteinCard product={p1} />
		<ProteinCard product={p2} />
		</Stack>
		</div>
	);
}
