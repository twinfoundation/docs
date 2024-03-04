import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'First Section',
		Svg: require('@site/static/img/gtsc.svg').default,
		description: (
			<>
				Lorum Ipsem.
			</>
		),
	},
	{
		title: 'Second Section',
		Svg: require('@site/static/img/gtsc.svg').default,
		description: (
			<>
				Lorum Ipsem.
			</>
		),
	}, {
		title: 'Third Section',
		Svg: require('@site/static/img/gtsc.svg').default,
		description: (
			<>
				Lorum Ipsem.
			</>
		),
	}

];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
