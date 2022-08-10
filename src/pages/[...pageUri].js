import { getNextStaticProps, is404 } from '@faustjs/next';
import { client } from '../client';
import {
  Header,
  Footer,
} from '../components';

export function PageComponent({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <main>
          <div className="siteHeader">
            <h1 className="title">
                Test {page.title()}
            </h1>
            <p>✍️  &nbsp;&nbsp;{`${page.author.node.firstName} ${page.author.node.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(page.date).toLocaleDateString() }</p>
          </div>
            <article dangerouslySetInnerHTML={{__html: page.content()}}>   
            </article>
      </main>

      <Footer />
    </>
  );
}

export default function Page() {
  const { usePage } = client;
  const page = usePage();

  return <PageComponent page={page} />;
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}