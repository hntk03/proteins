import { Stack, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import ProteinsDisplay from '../components/proteinsDisplay';


export default function SearchCtrl ({tags, setTags}){
	const [checkedWhey, setCheckedWhey] = useState(false);
	const [checkedSoy, setCheckedSoy] = useState(false);

	const WheyCheckboxOnChange = (e) => {
		const isChecked = e.target.checked;
		setCheckedWhey(isChecked);
		
		let newTag = tags.slice()
		if(isChecked){
			newTag.push('ホエイ');
		}else{
			newTag = newTag.filter(tag => tag !== 'ホエイ');
		}

		setTags(newTag);
	}

	const SoyCheckboxOnChange = (e) => {
		const isChecked = e.target.checked;
		setCheckedSoy(isChecked);
		
		let newTag = tags.slice()
		if(isChecked){
			newTag.push('ソイ');
		}else{
			newTag = newTag.filter(tag => tag !== 'ソイ');
		}

		setTags(newTag);
	}

	return (
		<Stack direction='row'>
			<Checkbox isChecked={checkedWhey} onChange={WheyCheckboxOnChange}>ホエイ</Checkbox>
			<Checkbox isChecked={checkedSoy} onChange={SoyCheckboxOnChange}>ソイ</Checkbox>
		</Stack>
	);

}
