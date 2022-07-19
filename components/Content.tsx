import type { StaticImageData } from 'next/image';

export interface ContentProps {
	title: string;
	image: StaticImageData;
	alt: string;
}

export default function Content(props: ContentProps) {
	const { title, image, alt } = props;

	return (
		<div>
			<h2>{title}</h2>

			<figure style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
				<img
					src={image.src}
					width={image.width}
					height={image.height}
					alt={alt}
					style={{ display: 'block' }}
				/>
				<figcaption style={{ fontSize: '0.75em' }}>
					<pre style={{ whiteSpace: 'pre-wrap' }}>
						<code>
							{JSON.stringify(image, null, 2)}
						</code>
					</pre>
				</figcaption>
			</figure>
		</div>
	);
}
