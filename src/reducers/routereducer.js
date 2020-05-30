const routereducer = (state = '', action) => {
    switch (action.type) {
        case 'SETROUTE':
            state = action.payload
            return state
        case 'GETROUTE':
            return state
        default:
            return state
    }
}

export default routereducer