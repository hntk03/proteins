import { Stack, Checkbox, Heading, Box } from '@chakra-ui/react';
import { useState } from 'react';

import ProteinTag from '../components/proteinTag';

export default function FilterCtrl ({tags, setTags}){

	class FilterCheckBox{
		constructor(tag){
			this.tag = tag;
			[this.isChecked, this.setCheckBox] = useState(false);
		}

		OnChange = (e) => {
			const isChecked = e.target.checked;
			this.setCheckBox(isChecked);
			
			let newTag = tags.slice()
			if(isChecked){
				newTag.push(this.tag);
			}else{
				newTag = newTag.filter(tag => tag !== this.tag);
			}

			setTags(newTag);
		}
	}

	const wheyCheckBox = new FilterCheckBox(ProteinTag.Whey);
	const soyCheckBox = new FilterCheckBox(ProteinTag.Soy);

	return (
		<Box my='5' borderWidth='1px' borderRadius='lg'>
		<Heading size='md' mt='2' ml='2'>フィルター</Heading>
		<Stack direction='row' ml='2' mb='2'>
			<Checkbox isChecked={wheyCheckBox.isChecked} onChange={wheyCheckBox.OnChange}>{wheyCheckBox.tag}</Checkbox>
			<Checkbox isChecked={soyCheckBox.isChecked} onChange={soyCheckBox.OnChange}>{soyCheckBox.tag}</Checkbox>
		</Stack>
		</Box>
	);

}
