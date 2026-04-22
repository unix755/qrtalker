import {createFileRoute} from "@tanstack/react-router"
import {useQuery} from "@tanstack/react-query"
import {Flex} from "antd"
import {API_ReadIPInfo} from "../apis/ipinfo"

export const Route = createFileRoute("/ipinfo")({
    component: RouteComponent,
})

function RouteComponent() {
    let ipAddress: string | undefined

    const readIPInfoQuery = useQuery({
        enabled: false,
        queryKey: ["readIPInfo"],
        queryFn: async () => API_ReadIPInfo(ipAddress)
    })

    return <>
        <Flex align="center" justify="space-between" vertical={true} style={{minHeight: "98vh"}}>
            <Flex align="flex-start"> </Flex>

            <Flex align="center" vertical={true}>
                <button onClick={() => readIPInfoQuery.refetch()}>
                    Read IP Info
                </button>
                {readIPInfoQuery.data && (
                    <>
                        <p>IP: {readIPInfoQuery.data.ip}</p>
                        <p>City: {readIPInfoQuery.data.city}</p>
                        <p>Region: {readIPInfoQuery.data.region}</p>
                        <p>Country: {readIPInfoQuery.data.country}</p>
                        <p>Org: {readIPInfoQuery.data.org}</p>
                    </>
                )}
            </Flex>

            <Flex align="flex-end">
                <a href="https://github.com/unix755/qrtalker" style={{color: "inherit"}}>©unix755</a>
            </Flex>
        </Flex>
    </>
}
