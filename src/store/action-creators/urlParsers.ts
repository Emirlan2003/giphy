export const getQuery = (location: any, key: any) => {
    const y = new URLSearchParams(location.search)
    return y.get(key) || null
}

export const setToQueryParams = (location: any, param: any, value: any) => {
    let params = new URLSearchParams(location.search)
    params.set(param, value)
    return params
}



