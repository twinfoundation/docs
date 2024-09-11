import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	svg: string;
	description: string;
	href: string;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Introduction',
		svg: '/img/logo.svg',
		description: 'A short introduction to TWIN technology.',
		href: '/docs/intro'
	},
	{
		title: 'Packages',
		svg: '/img/logo.svg',
		description: 'Information about the available technology packages.',
		href: '/docs/pkgs'
	},
	{
		title: 'Lorum Ipsem',
		svg: '/img/logo.svg',
		description: 'Lorum Ipsem.',
		href: '/'
	}
];

function Feature({ title, svg, description, href }: FeatureItem) {
	return (
		<a href={href} className={styles.feature}>
			<div className={styles.featureHeader}>
				<img src={svg} role="img" className={styles.featureImg} />
				<Heading as="h3">{title}</Heading>
			</div>
			<div className={styles.featureDescription}>
				<p>{description}</p>
			</div>
		</a>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className={styles.featuresRow}>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
