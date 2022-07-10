import { Fragment } from "react";
import type { NextPage } from "next";
import Page from "components/Page/Page";

/*
	Home page
*/

const Home: NextPage = (): JSX.Element => {
	return (
		<Page
			title="Travel to Madagascar with an experienced tourism agency"
			image="/assets/covers/baobabs-morondava.jpg"
			description="Hire a touristic driver guide to visit Madagascar."
		>
			<Fragment>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
				<div className="container">
					<p className="pd-b-20 tx-j">
						Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum
						neque ut, interdum est. Praesent in euismod nunc. Ut vel lorem a velit
						venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet
						ullamcorper vehicula. Nam in pretium velit. Etiam lacinia, nisl ac rutrum
						vestibulum, risus enim placerat nisl, eget bibendum neque nibh a lectus.
						Donec tincidunt lacinia pharetra. Proin diam arcu, gravida sit amet
						lobortis ut, posuere sed turpis. Cras fringilla tristique ligula, eget
						varius leo pellentesque ut. Praesent fringilla suscipit turpis, sed
						scelerisque nunc venenatis ut. Maecenas quis imperdiet velit. Fusce
						lacinia fringilla lectus, non condimentum ligula fermentum id. Aenean
						porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
						dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
						iaculis vitae.
					</p>
					<p className="pd-b-20 tx-j">
						Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum
						neque ut, interdum est. Praesent in euismod nunc. Ut vel lorem a velit
						venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet
						ullamcorper vehicula. Nam in pretium velit. Etiam lacinia, nisl ac rutrum
						vestibulum, risus enim placerat nisl, eget bibendum neque nibh a lectus.
						Donec tincidunt lacinia pharetra. Proin diam arcu, gravida sit amet
						lobortis ut, posuere sed turpis. Cras fringilla tristique ligula, eget
						varius leo pellentesque ut. Praesent fringilla suscipit turpis, sed
						scelerisque nunc venenatis ut. Maecenas quis imperdiet velit. Fusce
						lacinia fringilla lectus, non condimentum ligula fermentum id. Aenean
						porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
						dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
						iaculis vitae.
					</p>
					<p className="pd-b-20 tx-j">
						Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum
						neque ut, interdum est. Praesent in euismod nunc. Ut vel lorem a velit
						venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet
						ullamcorper vehicula. Nam in pretium velit. Etiam lacinia, nisl ac rutrum
						vestibulum, risus enim placerat nisl, eget bibendum neque nibh a lectus.
						Donec tincidunt lacinia pharetra. Proin diam arcu, gravida sit amet
						lobortis ut, posuere sed turpis. Cras fringilla tristique ligula, eget
						varius leo pellentesque ut. Praesent fringilla suscipit turpis, sed
						scelerisque nunc venenatis ut. Maecenas quis imperdiet velit. Fusce
						lacinia fringilla lectus, non condimentum ligula fermentum id. Aenean
						porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
						dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
						iaculis vitae.
					</p>
					<p className="pd-b-20 tx-j">
						Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum
						neque ut, interdum est. Praesent in euismod nunc. Ut vel lorem a velit
						venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet
						ullamcorper vehicula. Nam in pretium velit. Etiam lacinia, nisl ac rutrum
						vestibulum, risus enim placerat nisl, eget bibendum neque nibh a lectus.
						Donec tincidunt lacinia pharetra. Proin diam arcu, gravida sit amet
						lobortis ut, posuere sed turpis. Cras fringilla tristique ligula, eget
						varius leo pellentesque ut. Praesent fringilla suscipit turpis, sed
						scelerisque nunc venenatis ut. Maecenas quis imperdiet velit. Fusce
						lacinia fringilla lectus, non condimentum ligula fermentum id. Aenean
						porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
						dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
						iaculis vitae.
					</p>
					<p className="pd-b-20 tx-j">
						Quisque pellentesque in sem at commodo. Nulla ut quam maximus, rutrum
						neque ut, interdum est. Praesent in euismod nunc. Ut vel lorem a velit
						venenatis convallis mollis eu nisi. Aliquam consectetur ex sit amet
						ullamcorper vehicula. Nam in pretium velit. Etiam lacinia, nisl ac rutrum
						vestibulum, risus enim placerat nisl, eget bibendum neque nibh a lectus.
						Donec tincidunt lacinia pharetra. Proin diam arcu, gravida sit amet
						lobortis ut, posuere sed turpis. Cras fringilla tristique ligula, eget
						varius leo pellentesque ut. Praesent fringilla suscipit turpis, sed
						scelerisque nunc venenatis ut. Maecenas quis imperdiet velit. Fusce
						lacinia fringilla lectus, non condimentum ligula fermentum id. Aenean
						porttitor aliquet leo, in faucibus metus pretium id. Sed volutpat
						dignissim scelerisque. Aenean molestie odio libero, vel condimentum risus
						iaculis vitae.
					</p>
				</div>
			</Fragment>
		</Page>
	);
};

export default Home;
