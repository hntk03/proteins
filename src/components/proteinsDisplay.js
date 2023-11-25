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
		new Taste(
			'ココナッツチヨコレート',
			new Url('https://amzn.asia/d/fjmtLyk')),
		new Taste(
			'チョコレート',
			new Url('https://amzn.asia/d/31Sx6jz')),
		new Taste(
			'フルーツオレ',
			new Url('https://amzn.asia/d/0Cqkzzv')),
		new Taste(
			'抹茶ラテ',
			new Url('https://amzn.asia/d/cexRDDf')),
		new Taste(
			'紫芋',
			new Url('https://amzn.asia/d/0aRdKmN')),
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
		new Taste(
			'モンブラン',
			new Url('https://amzn.asia/d/3YcVOK0')),
		new Taste(
			'杏仁',
			new Url('https://amzn.asia/d/0CYoTHx')),
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
		new Taste(
			'ベリベリベリー風味',
			new Url('https://amzn.asia/d/5IiBLpd')),
		new Taste(
			'そんなバナナ風味',
			new Url('https://amzn.asia/d/exMUEJe')),
		new Taste(
			'情熱のパッションフルーツ風味',
			new Url('https://amzn.asia/d/85Z5Wn5')),
		new Taste(
			'GO GO マンゴー風味',
			new Url('https://amzn.asia/d/8Tdxe2j')),
		new Taste(
			'初恋のいちご風味',
			new Url('https://amzn.asia/d/hquFZJK')),
		new Taste(
			'めろめろメロン風味',
			new Url('https://amzn.asia/d/35oyn4c')),
		new Taste(
			'よう振るとヨーグルト風味',
			new Url('https://amzn.asia/d/h171f6T')),
		new Taste(
			'ナチュラル',
			new Url('https://amzn.asia/d/1AO3Rs1')),
		new Taste(
			'キャラメル珈琲風味',
			new Url('https://amzn.asia/d/01pHIbb')),
		new Taste(
			'抹茶のチャチャチャ風味',
			new Url('https://amzn.asia/d/3eR9uUO')),
		new Taste(
			'背中に鬼レモン風味',
			new Url('https://amzn.asia/d/hCn2emr')),
		new Taste(
			'ぴちぴちハッピーチ風味',
			new Url('https://amzn.asia/d/bkUvgcB')),
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
