import React from 'react';
import Link from 'next/link';
import { Post } from '../client';
import PostCard from './PostCard';
// import Heading, { HeadingProps } from './Heading';

function Posts({ posts, intro, id }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section>
      <div className="wrap">
        {/* {heading && (
          <Heading level={headingLevel} className={styles.heading}>
            {heading}
          </Heading>
        )} */}
        {intro && <p>{intro}</p>}
        <div className="posts">
          {posts.map((post) => (

            <div
              key={post.id ?? ''}
              id={`post-${post.id}`}>
              <div>
                  <h2>
                    <Link href={`/posts/${post.slug}`}>
                      <a>{post.title()}</a>
                    </Link>
                  </h2>
                {/* <Heading level={postTitleLevel} className={styles.title}>
                </Heading> */}
                <div
                  
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: post.excerpt() ?? '' }}
                />
                <Link href={`/posts/${post.slug}`}>
                  <a aria-label={`Read more about ${post.title || 'the post'}`}>
                    {/* {readMoreText} */}
                  </a>
                </Link>
                <hr />
              </div>
            </div>
          ))}
          {posts && posts?.length < 1 && <p>No posts found.</p>}
        </div>
      </div>
    </section>
  );
}

export default Posts;
