import Company from '../company';
import ProteinTag from '../proteinTag';
import Product from '../product';
import Taste from '../taste';
import Url from '../url';

const Belegend = new Company('ビーレジェンド', 'https://store.belegend.jp/');

const wpc = new Product(
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

export default function Belegends(){
	return [wpc];
}
