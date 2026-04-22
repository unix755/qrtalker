const URL_BASE = new URL("/", "https://ipinfo.io")

interface API_IPInfo {
    ip: string
    city: string
    region: string
    country: string
    org: string

    [key: string]: string
}

async function API_ReadIPInfo(ipAddress?: string): Promise<API_IPInfo> {
    const url = new URL(URL_BASE)

    if (ipAddress != undefined) {
        url.pathname = `/${ipAddress}`
    }

    const resp = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    return await resp.json()
}

export {
    API_IPInfo,
    API_ReadIPInfo
}