import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Value Proposition 1",
		image: "/img/undraw_docusaurus_mountain.svg",
		description: (
			<>
				Short blurb regarding top benefit that devs using our package would be
				interested in.
			</>
		),
	},
	{
		title: "Focus on your Viz",
		image: "/img/undraw_docusaurus_tree.svg",
		description: (
			<>
				Spend less time worrying about how React and D3 interact with the DOM,
				and more time making your viz accesible, performant , and beautiful.
			</>
		),
	},
	{
		title: "Extend the D3 api",
		image: "/img/undraw_docusaurus_react.svg",
		description: (
			<>
				Extend the D3 api to make building your chart components just like building your React UI
				components.
			</>
		),
	},
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
