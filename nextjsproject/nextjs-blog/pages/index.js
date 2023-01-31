import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from "../components/Alert";

export default function Home() {

    const isTrue = true;

  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
          {isTrue ? <Alert type="success" />: <Alert type="error"/>}
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  );
}
