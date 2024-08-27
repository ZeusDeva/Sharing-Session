import { ConfigProvider, Spin } from "antd";
import Head from "next/head";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import cookie from "react-cookies";

// components
import MainLayout from "../components/Layout/MainLayout";
import Loading from "../components/Loading";
// constants
import { validateMessages } from "../constants/validateMessages";
// store
import wrapperStore from "../redux";
// utils
import AuthStorage from "../utils/auth-storage";
import { useRouter } from "next/router";

// Style
import classes from "./style.module.less";

require("../styles/index.less");

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const [loading, setLoading] = useState(false);
  const Layout = Component.Layout || MainLayout;

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    // Cleanup event listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  return (
    <>
    {loading ? (
      <div className={classes.spinneroverlay}>
					<Spin size="large"></Spin>
			</div>
      ) : (
        <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0"
          />
        </Head>
        <ConfigProvider form={{ validateMessages }}>
          <Component {...pageProps}/>
        </ConfigProvider>
      </Layout>
    )}
    </>
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
