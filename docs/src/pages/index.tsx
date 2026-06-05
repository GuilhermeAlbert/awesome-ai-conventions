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
      title="Awesome AI Conventions"
      description="A curated list of emerging conventions, file standards, and protocols for building with AI agents.">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Curated registry for agent-ready projects</p>
            <Heading as="h1" className={styles.heroTitle}>
              Awesome AI Conventions
            </Heading>
            <p className={styles.heroLead}>
              File-based conventions and open protocols that help humans,
              codebases, and AI agents communicate with less guesswork.
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
            <span>convention families</span>
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
