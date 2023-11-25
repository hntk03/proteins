import Company from '../company';
import ProteinTag from '../proteinTag';
import Product from '../product';
import Taste from '../taste';
import Url from '../url';

const xplosion = new Company('X-PLOSION', 'https://store.x-plosion.jp/');

const wpc = new Product(
	'WPC 100%ナチュラルホエイプロテイン',
	xplosion,
	'https://makeshop-multi-images.akamaized.net/xp2013/itemimages/000000000257_vmDDfgY.jpg',
	[ ProteinTag.Whey ],
	[
		new Taste(
			'ミルクチョコレート味',
			new Url('https://amzn.asia/d/eSCtsBT')),
		new Taste(
			'カシス味',
			new Url('https://amzn.asia/d/8JHQd5e')),
		new Taste(
			'カフェオレ味',
			new Url('https://amzn.asia/d/5XuJ8cR')),
		new Taste(
			'グレープ味',
			new Url('https://amzn.asia/d/27syL0N')),
		new Taste(
			'ストロベリー味',
			new Url('https://amzn.asia/d/dAneT37')),
		new Taste(
			'バナナ',
			new Url('https://amzn.asia/d/eD1SB7F')),
		new Taste(
			'バニラ',
			new Url('https://amzn.asia/d/aYtfLKU')),
		new Taste(
			'ピーチ',
			new Url('https://amzn.asia/d/g4Fzxzo')),
		new Taste(
			'フルーツオレ味',
			new Url('https://amzn.asia/d/7Fd3Mi3')),
		new Taste(
			'ブラッドオレンジ味',
			new Url('https://amzn.asia/d/a2ZLePs')),
		new Taste(
			'ブルーベリー',
			new Url('https://amzn.asia/d/hOWf8CM')),
		new Taste(
			'メロン味',
			new Url('https://amzn.asia/d/cOYO2At')),
		new Taste(
			'ヨーグルト味',
			new Url('https://amzn.asia/d/cs8aod9')),
		new Taste(
			'抹茶オレ味',
			new Url('https://amzn.asia/d/e8swD11')),
		new Taste(
			'杏仁豆腐味',
			new Url('https://amzn.asia/d/ejAgoF3')),
	]
);

export default function Xplosions(){
	return [wpc];
}
