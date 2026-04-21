const url = new URL("/", "https://ipinfo.io").toString()

async function API_readIpInfo(): Promise<{}> {
    const resp = await fetch(url, {
        method: "GET",
        headers: [
            ["Accept", "application/json"],
        ]
    })
    return await resp.json()
}

export {
    API_readIpInfo
}