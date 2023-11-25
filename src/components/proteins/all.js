import Ultras from './ultra';
import Belegends from './belegend';
import Savass from './savas';
import Xplosions from './xplosion';


export default function Proteins(){
	const proteins = [];
	proteins.push(...Ultras());
	proteins.push(...Belegends());
	proteins.push(...Savass());
	proteins.push(...Xplosions());

	return proteins;
}

