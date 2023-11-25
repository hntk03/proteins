import Company from '../components/company';

export default class Product {
	constructor(name, company, imgUrl, tags, tastes){
		this.name = name;
		this.company = company;
		this.imgUrl = imgUrl;
		this.tags = tags;
		this.tastes = tastes;
	}
}
