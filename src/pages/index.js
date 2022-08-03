import Head from 'next/head';
import { Header, Footer, PostCard } from "../components"
import { getNextStaticProps } from '@faustjs/next';
import { client } from '../client';
// import { getAllPosts } from '../../lib/test-data';
// import { client } from '../../lib/apollo';
// import { gql } from "@apollo/client";

export default function Home() {

  const { useQuery, usePosts } = client;
  const generalSettings = useQuery().generalSettings;
  const posts = usePosts({
    first: 6
  });

  if (useQuery().$state.isLoading) {
    return null;
  }

  return (
    <div className="container">
      <Head>
        <title>Headless WP Next Starter React!!!</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">
          Headless WordPress Next.js Starter Brid
        </h1>

        <p className="description">
          Stop started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {
            posts.nodes.map((post, index) => {
              return (
                <PostCard key={post.id ?? 'post'+index} post={post}></PostCard>
              )
            })
          }
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}



export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Home,
    client,
  });
}

// export async function getStaticProps(){

//   // Paste your GraphQL query inside of a gql tagged template literal
//   const GET_POSTS = gql`
//     query AllPostsQuery {
//       posts {
//         nodes {
//           title
//           content
//           date
//           uri
//         }
//       }
//     }
//   `;
//   // Here we make a call with the client and pass in our query string to the 
//   // configuration objects 'query' property
//   const response = await client.query({
//     query: GET_POSTS
//   });
//   // Once we get the response back, we need to traverse it to pull out the 
//   // data we want to pass into the HomePage
//   const posts = response?.data?.posts?.nodes; 

//   return {
//     props: {
//       posts
//     }
//   }
// }
