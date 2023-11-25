import Ultras from './ultra';
import Belegends from './belegend';
import Savass from './savas';


export default function Proteins(){
	const proteins = [];
	proteins.push(...Ultras());
	proteins.push(...Belegends());
	proteins.push(...Savass());

	return proteins;
}

