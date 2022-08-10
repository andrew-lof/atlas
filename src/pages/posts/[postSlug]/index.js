import { getNextStaticProps, is404 } from '@faustjs/next';
import { client, Post } from '../../../client';
import { Footer, Header } from '../../../components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export function PostComponent({ post }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>

      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
      </Head>

      <main>
          <div className="siteHeader">
            <h1 className="title">
                {post.title()}
            </h1>
            <p>✍️  &nbsp;&nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</p>
          </div>
            <article dangerouslySetInnerHTML={{__html: post.content()}}>   
            </article>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
    revalidate: 10
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
