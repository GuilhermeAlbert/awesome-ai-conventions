import clsx from 'clsx';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const featureCards = [
  {
    title: 'Decision Guide',
    description:
      'Choose the smallest convention that solves a concrete agent-readiness problem.',
    link: '/docs/decision_guide',
  },
  {
    title: 'Copyable Examples',
    description:
      'Browse generated pages for every example file, including hidden well-known paths.',
    link: '/docs/examples',
  },
  {
    title: 'Methodology',
    description:
      'See how entries are evaluated, updated, demoted, and removed from the registry.',
    link: '/docs/methodology',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Awesome Agent Standards"
      description="A curated index of standards, protocols, conventions, and emerging patterns for AI agents.">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Curated index for AI agents</p>
            <Heading as="h1" className={styles.heroTitle}>
              Awesome Agent Standards
            </Heading>
            <p className={styles.heroLead}>
              Standards, protocols, conventions, and emerging patterns for
              building agents that work across tools and repositories.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Read the docs
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/examples">
                Browse examples
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.metrics} aria-label="Project coverage">
          <div>
            <strong>10+</strong>
            <span>registry families</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>example files</span>
          </div>
          <div>
            <strong>5</strong>
            <span>status levels</span>
          </div>
        </section>

        <section className={styles.cards}>
          {featureCards.map((card) => (
            <Link className={clsx(styles.card)} to={card.link} key={card.title}>
              <Heading as="h2">{card.title}</Heading>
              <p>{card.description}</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
