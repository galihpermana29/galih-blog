import '../styles/globals.css';
import { data } from '../Components/CardSection';
import 'prismjs/themes/prism-tomorrow.css';
import Navbar from '../Components/Navbar';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} data={data} />
		</>
	);
}

export default MyApp;
