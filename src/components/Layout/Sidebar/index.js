import React from 'react'
import { Image, Layout, Menu } from 'antd'
import classes from './style.module.less'
import { sidebarMenu } from 'src/constants/sidebarMenu'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../../../redux/actions/sidebarMenu'
import { useRouter } from 'next/router'

const Sidebar = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  //for change view
  const stateMenuSidebar = useSelector((state) => state.setMenu)
  const selectedKey = stateMenuSidebar.selectedKey
  const handleMenuClick = (e) => {
    dispatch(setMenu(e.key))
    console.log(e)
    if (e.key == '1') router.push('/')
    else if (e.key == '2') router.push('/date')
    else if (e.key == '3') router.push('/input')
    else if (e.key == '4') router.push('/option')
    else if (e.key == '5') router.push('/view')
    // router.push()
  }

  return (
    <div className={classes.sidebarWrapper}>
      <Layout>
        {/* header sidebar*/}
        <div className={classes.sidebarHeader}>
          <a>
            <div className={classes.logo}>
              <Image src={'/svg/muf_logo.svg'} preview={false} />
            </div>
          </a>
        </div>
        <Layout.Sider
          className={classes.sidebar}
          theme='light'
          collapsedWidth={0}
          trigger={null}
          width={250}
        >
          {/* list menu sidebar */}
          <Menu
            mode='inline'
            items={sidebarMenu}
            onClick={handleMenuClick}
            selectedKeys={[selectedKey]}
          />

          {/* footer sidebar */}
          <div className={classes.sidebarfooter}>
            <p>
              © 2024 MANDIRI UTAMA FINANCE. <br></br>All Right Reserved.
            </p>
          </div>
        </Layout.Sider>
      </Layout>
    </div>
  )
}

export default Sidebar
