import { HomeOutlined, SettingOutlined } from '@ant-design/icons'

export const sidebarMenu = [
  {
    label: 'Home',
    icon: <HomeOutlined />,
    key: '1',
    path: '/',
  },
  {
    key: 'Example',
    icon: <SettingOutlined />,
    label: 'Example',
    children: [
      {
        key: '2',
        label: 'Date',
        path: '/date',
      },
      {
        key: '3',
        label: 'Input',
        path: '/input',
      },
      {
        key: '4',
        label: 'Option',
        path: '/option',
      },
      {
        key: '5',
        label: 'View',
        path: '/view',
      },
    ],
  },
]
