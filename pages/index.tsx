import type {NextPage} from 'next';
import Head from 'next/head';
import Hero from '../components/Section';
import Category from '../components/Category';
import ProductList from '../components/ProductList';
import BestSeller from '../components/BestSeller';
import Blog from '../components/Blog';
import Award from '../components/Award';
import Rating from '../components/Rating';
import Faq from '../components/Faq';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Nutrivellege</title>
			</Head>
			<Hero/>
			<Category/>
			<ProductList/>
			<BestSeller/>
			<Blog/>
			<Award/>
			<Rating/>
			<Faq/>
		</>
	);
};

export default Home;
