import MyHead from '../components/myhead';
import Header from '../components/header';
import Footer from '../components/footer';
import ProteinsDisplay from '../components/proteinsDisplay';

import { Container } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
		<ChakraProvider>
    <div>
			<Container>

			<MyHead />

      <main>
			<Header />
			<ProteinsDisplay />
			<Footer />
      </main>
			</Container>
		</div>
		</ChakraProvider>
	);
}
