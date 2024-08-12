import { ConfigProvider } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

import PropTypes from "prop-types";
import { useState } from "react";
import cookie from "react-cookies";
import { useAsync } from "react-use";

// components
import MainLayout from "../components/Layout/MainLayout";
import Loading from "../components/Loading";
// constants
import { validateMessages } from "../constants/validateMessages";
// store
import wrapperStore from "../redux";
// utils
import AuthStorage from "../utils/auth-storage";

require("../styles/index.less");

const MyApp = (props) => {
  const router = useRouter();
  const { token } = router?.query || {};
  const { Component, pageProps } = props;
  const [awaitLoading, setAwaitLoading] = useState(true);
  const Layout = Component.Layout || MainLayout;

  useAsync(async () => {
    setAwaitLoading(false);
  }, []);

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0"
        />
      </Head>
      <ConfigProvider form={{ validateMessages }}>
        <Component {...pageProps} router={router} />
      </ConfigProvider>
      <Loading fullScreen loading={awaitLoading} />
    </Layout>
  );
};

MyApp.getInitialProps = async (context) => {
  const { ctx, Component } = context;

  if (!process.browser) {
    cookie.plugToRequest(ctx.req, ctx.res);
  }

  //if (AuthStorage.loggedIn && urlsIgnore.includes(ctx.pathname)) {
  if (AuthStorage.loggedIn) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
  }

  // calls page's getInitialProps and fills appProps.pageProps
  let pageProps = {};

  if (Component?.getInitialProps) {
    pageProps = await Component?.getInitialProps(ctx);
  }

  const propsData = {
    ...pageProps,
  };

  let layoutProps = {};

  if (Component?.Layout) {
    layoutProps = await Component?.Layout?.getInitialProps?.({
      ...ctx,
      pageProps: propsData,
    });
  } else {
    layoutProps = await MainLayout?.getInitialProps?.({
      ...ctx,
      pageProps: propsData,
    });
  }

  return {
    pageProps: {
      ...propsData,
      ...layoutProps,
    },
  };
};

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
};

export default wrapperStore.withRedux(MyApp);
