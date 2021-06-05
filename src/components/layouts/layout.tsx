import * as React from 'react';
import Helmet from 'react-helmet';
import Footer from '../footer';
import Top from '../top';

const MainLayout:React.FunctionComponent = (props) => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta content='yes' name='apple-mobile-web-app-capable' />
        <meta name="theme-color" content="#800020" class="change-meta" />
        <title>Kidney Donation Diary</title>
      </Helmet>
      <Top />
      <main>
        <hr/>
        {props.children}
        <hr/>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
