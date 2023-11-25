import ProteinCard from '../components/proteinCard';
import Product from '../components/product';
import { Text, SimpleGrid } from '@chakra-ui/react';

import Proteins from '../components/proteins/all';

export default function ProteinsDisplay({tags}){
	const proteins = Proteins();
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
