import Company from '../company';
import ProteinTag from '../proteinTag';
import Product from '../product';
import Taste from '../taste';
import Url from '../url';

const Ultra = new Company('ULTORA', 'https://ultora.co.jp/');

const WheyDiet = new Product(
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

const SoyDiet = new Product(
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

export default function Ultras(){
	return [WheyDiet, SoyDiet];
}
