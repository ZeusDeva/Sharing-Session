import { HomeOutlined, SettingOutlined } from "@ant-design/icons";

export const sidebarMenu = [
    {
        label: 'Home',
        icon: <HomeOutlined/>,
        key: "/",
    },
    {
        key: 'Example',
        icon: <SettingOutlined/>,
        label: 'Example',
        children: [
            {
                key: '/Date',
                label: 'Date',
            },
            {
                key: '/Input',
                label: 'Input',
            },
            {
                key: '/Option',
                label: 'Option',
            },
            {
                key: '/View',
                label: 'View',
            },
        ],
    },
  ];