import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Be a DevOps Engineer!',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Presenting professional training on
        DevOps with Github, Jenkins, Docker Containers, Kubernetes, Terraform & Ansible.
      </>
    ),
  },
  {
    title: 'Linux Deep Dive!',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Presenting professional training on
        Linux with Nagios, NRPE, Docker, SSL, MySQL & Networking.
      </>
    ),
  },
  {
    title: 'AWS 2 In 1',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Presenting professional training on
        AWS 2 In 1(AWS Solutions Architect & Developer Associate)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
