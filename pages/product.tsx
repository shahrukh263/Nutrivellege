import type {NextPage} from 'next';
import Head from 'next/head';
import ProductList from '../components/ProductList';
import ProductPageList from '../components/ProductPageList';

const Product: NextPage = () => {
	return (
		<>
			<Head>
				<title>Nutrivellege</title>
			</Head>
			<ProductPageList/>
		</>
	);
};

export default Product;
