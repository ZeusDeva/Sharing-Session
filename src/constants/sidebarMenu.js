import { HomeOutlined, SettingOutlined } from "@ant-design/icons";

export const sidebarMenu = [
    {
        label: 'Home',
        icon: <HomeOutlined/>,
        key: "1",
    },
    {
        key: 'Example',
        icon: <SettingOutlined/>,
        label: 'Example',
        children: [
            {
                key: '2',
                label: 'Date',
            },
            {
                key: '3',
                label: 'Input',
            },
            {
                key: '4',
                label: 'Option',
            },
            {
                key: '5',
                label: 'View',
            },
        ],
    },
  ];