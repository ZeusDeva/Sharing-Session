import { BackTop, Layout, Image } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

// components
import AvatarDropDown from "src/components/AvatarDropDown";
import Header from "src/components/Layout/Header";
import Notifications from "src/components/Notifications";
import AuthStorage from "src/utils/auth-storage";

// icons
import ArrowLeftIcon from "public/svg/arrow-left.svg";
// constants
// import { ROUTES, SUB_ROUTES } from "src/constants/routes";
// style
import classes from "./style.module.less";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

// Data
const { Content } = Layout;

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const MainLayout = (props) => {
  const { children } = props;
  
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode){
  //     document.body.classList.add('dark-mode')
  //   } else {
  //     document.body.classList.remove('dark-mode')
  //   }
  // }, [darkMode])

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode)
  // }

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
        // className={`${classes.root} ${darkMode ? 'dark-mode' : ''}`}
      >
      <Header>
              <Link href="/">
                <a>
                  <div className={classes.logo}>
                    <Image src={'/svg/muf_logo.svg'} preview={false}/>
                  </div>
                </a>
              </Link>
              {AuthStorage.loggedIn && (
                <div className={classes.headerRight}>
                  <Notifications />
                  <AvatarDropDown />
                </div>
              )}
        </Header>
        {AuthStorage.loggedIn && (
            <>
              <Sidebar/>
            </>
        )}
        <Content className={classes.content}>
          {children}
        </Content>
      </Layout>
      <BackTop />
    </>
  );
};

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
