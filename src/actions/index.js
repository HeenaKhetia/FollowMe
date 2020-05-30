export const setlang = (data) => {
    return {
        type: 'SETLANG',
        payload: data
    }
}
export const getlang = () => {
    return {
        type: 'GETLANG'
    }
}

export const setroute = (data) => {
    return {
        type: 'SETROUTE',
        payload: data
    }
}
export const getroute = () => {
    return {
        type: 'GETROUTE'
    }
}