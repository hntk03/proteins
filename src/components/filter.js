import { Stack, Checkbox, Heading, Box } from '@chakra-ui/react';
import { useState } from 'react';

import ProteinTag from '../components/proteinTag';

export default function FilterCtrl ({tags, setTags}){
	const [checkedWhey, setCheckedWhey] = useState(false);
	const [checkedSoy, setCheckedSoy] = useState(false);

	const WheyCheckboxOnChange = (e) => {
		const isChecked = e.target.checked;
		setCheckedWhey(isChecked);
		
		let newTag = tags.slice()
		if(isChecked){
			newTag.push(ProteinTag.Whey);
		}else{
			newTag = newTag.filter(tag => tag !== ProteinTag.Whey);
		}

		setTags(newTag);
	}

	const SoyCheckboxOnChange = (e) => {
		const isChecked = e.target.checked;
		setCheckedSoy(isChecked);
		
		let newTag = tags.slice()
		if(isChecked){
			newTag.push(ProteinTag.Soy);
		}else{
			newTag = newTag.filter(tag => tag !== ProteinTag.Soy);
		}

		setTags(newTag);
	}

	return (
		<Box my='5'>
		<Heading size='md'>フィルター</Heading>
		<Stack direction='row'>
			<Checkbox isChecked={checkedWhey} onChange={WheyCheckboxOnChange}>{ProteinTag.Whey}</Checkbox>
			<Checkbox isChecked={checkedSoy} onChange={SoyCheckboxOnChange}>{ProteinTag.Soy}</Checkbox>
		</Stack>
		</Box>
	);

}
