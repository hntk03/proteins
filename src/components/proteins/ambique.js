import Company from '../company';
import ProteinTag from '../proteinTag';
import Product from '../product';
import Taste from '../taste';
import Url from '../url';

const Ambique = new Company('AMBiQUE', 'https://www.instagram.com/ambique_jp/');

const allinOne = new Product(
	'ALL in ONE PROTEIN',
	Ambique,
	'https://d2w53g1q050m78.cloudfront.net/organic/uploads/nolife/img/pc/products/ambique/brandtop/products_Amb_protein_thumb_choco.webp',
	[ ProteinTag.Whey ],
	[
		new Taste(
			'ヨーグルト',
			new Url('https://amzn.asia/d/e6IFYSo')),
		new Taste(
			'ストロベリー',
			new Url('https://amzn.asia/d/16xn9sv')),
		new Taste(
			'チョコレート',
			new Url('https://amzn.asia/d/aPsras6')),
		new Taste(
			'バナナ',
			new Url('https://amzn.asia/d/1hm2vNn')),
	]
);

export default function Ambiques(){
	return [allinOne];
}
