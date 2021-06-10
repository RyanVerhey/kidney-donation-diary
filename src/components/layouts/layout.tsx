import * as React from 'react';
import Helmet from 'react-helmet';
import Footer from '../footer';
import Top from '../top';

import '../../../static/fonts/raleway.css';
import '../../styles/normalize.scss';
import '../../styles/styles.scss';

const MainLayout:React.FunctionComponent = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta content='yes' name='apple-mobile-web-app-capable' />
        <meta name="theme-color" content="#800020" className="change-meta" />
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
