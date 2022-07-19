import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import Content, { ContentProps } from '../components/Content';
import imgA from '../assets/img-a.png';
import imgB from '../assets/img-b.png';

interface PageProps {
	content: ContentProps;
}

const Page: NextPage<PageProps> = (props) => {
	const { content } = props;

	return (
		<>
			<Head>
				<title>Demo</title>
			</Head>

			<div>
				<h1>Demo</h1>

				<Content
					title="Inline Content"
					image={imgA}
					alt="a"
				/>

				<Content {...content} />
			</div>
		</>
	);
};

interface StaticParams extends ParsedUrlQuery {
	//
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async (context) => {
	return {
		props: {
			content: {
				title: 'Static Props Content',
				image: imgB,
				alt: 'b',
			},
		},
	};
};

export default Page;
