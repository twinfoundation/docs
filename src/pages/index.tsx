import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
	return <img src="/img/banners/banner.jpg" />;
}

export default function Home(): React.JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description="Trade Worldwide Information Network">
			<div className={styles.outerContainer}>
				<div className={styles.container}>
					<HomepageHeader />
					<main>
						<HomepageFeatures />
					</main>
				</div>
			</div>
		</Layout>
	);
}
