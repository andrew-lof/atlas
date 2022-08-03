import React from 'react';
import { client } from '../client';
import { Header, Footer } from '../components';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header
        title={generalSettings?.title}
        description={generalSettings?.description}
      />
      <main className="content content-page">
        <div className="wrap">
          <div>
            <div>
                <h1>404</h1>
                <p>
                    The page you were looking for does not exist or is no longer
                    available.
                </p>
            </div>
          </div>
        </div>
      </main>
      <Footer copyrightHolder={generalSettings?.title} />
    </>
  );
}
