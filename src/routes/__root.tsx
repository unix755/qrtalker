import {createRootRoute, Link, Outlet, useLocation} from "@tanstack/react-router"
import {Affix, Layout, Menu} from "antd"
import {BarcodeOutlined, HomeOutlined, SearchOutlined} from "@ant-design/icons"

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const location = useLocation()
    const menuItems = [
        {
            key: "/",
            icon: <HomeOutlined/>,
            label: <Link to="/">主页</Link>,
        },
        {
            key: "sub1",
            icon: <BarcodeOutlined/>,
            label: "条码",
            children: [
                {key: "/barcode_generator", label: <Link to="/">生成</Link>},
                {key: "/barcode_scanner", label: <Link to="/">读取</Link>},
            ]
        },
        {
            key: "sub2",
            icon: <SearchOutlined/>,
            label: "查询",
            children: [
                {key: "/ipinfo", label: <Link to="/ipinfo">IP</Link>}
            ]
        }
    ]

    return (
        <>
            <Layout style={{minHeight: "98vh"}}>
                <Layout.Sider breakpoint="md" collapsible={true} theme="light">
                    <Affix>
                        <Menu defaultOpenKeys={["sub1", "sub2"]} mode="inline" items={menuItems}
                              selectedKeys={[location.pathname]}></Menu>
                    </Affix>
                </Layout.Sider>
                <Layout.Content>
                    <Outlet/>
                </Layout.Content>
            </Layout>
        </>
    )
}
