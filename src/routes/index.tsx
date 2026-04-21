import {createFileRoute} from "@tanstack/react-router"
import {Flex} from "antd"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <Flex align="center" justify="space-between" vertical={true} style={{minHeight: "98vh"}}>
            <Flex align="flex-start"> </Flex>

            <Flex align="center" vertical={true}>
                <img alt="" style={{height: "auto", maxWidth: 350, width: "100%"}} src="/favicon.svg"/>
                <h1>QR Talker</h1>
                <p>使用简便、功能强大的查询转换生成工具</p>
            </Flex>

            <Flex align="flex-end">
                <a href="https://github.com/unix755/qrtalker" style={{color: "inherit"}}>©unix755</a>
            </Flex>
        </Flex>
    </>
}
