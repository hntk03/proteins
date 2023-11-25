import Company from '../company';
import ProteinTag from '../proteinTag';
import Product from '../product';
import Taste from '../taste';
import Url from '../url';

const Savas = new Company('サバス', 'https://www.meiji.co.jp/sports/savas/');

const whey100 = new Product(
	'ホエイプロテイン100',
	Savas,
	'https://www.meiji.co.jp/sports/savas/img/common/common_advanced_whey.jpg',
	[ ProteinTag.Whey ],
	[
		new Taste(
			'ココア味',
			new Url('https://amzn.asia/d/9umgDMW')),
		new Taste(
			'すっきり フルーティー風味',
			new Url('https://amzn.asia/d/0dTxy3E')),
		new Taste(
			'バナナ風味',
			new Url('https://amzn.asia/d/4vco4Qh')),
		new Taste(
			'リッチショコラ味',
			new Url('https://amzn.asia/d/3oyupdH')),
		new Taste(
			'ビターショコラ風味',
			new Url('https://amzn.asia/d/bW0zFQc')),
	]
);

const aquaWhey100 = new Product(
	'アクアホエイプロテイン100',
	Savas,
	'https://www.meiji.co.jp/sports/savas/img/common/common_aquawhey-grapefruit.jpg?20220601',
	[ ProteinTag.Whey ],
	[
		new Taste(
			'グレープフルーツ風味',
			new Url('https://amzn.asia/d/aiJfznS')),
		new Taste(
			'レモン風味',
			new Url('https://amzn.asia/d/772Zv9M')),
	]
);

export default function Savass(){
	return [whey100, aquaWhey100];
}
