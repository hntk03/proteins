import { useState } from 'react';

import { Container } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import MyHead from '../components/myhead';
import Header from '../components/header';
import Footer from '../components/footer';
import ProteinsDisplay from '../components/proteinsDisplay';
import SearchCtrl from '../components/search';

export default function Home() {
	const [tags, setTags] = useState([]);
  return (
		<ChakraProvider>
    <div>
			<Container>

			<MyHead />

      <main>
			<Header />
			<SearchCtrl tags={tags} setTags={setTags} />
			<ProteinsDisplay tags={tags} />
			<Footer />
      </main>
			</Container>
		</div>
		</ChakraProvider>
	);
}
