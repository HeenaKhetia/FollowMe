const langreducer = (state = 'en', action) => {
    switch (action.type) {
        case 'SETLANG':
            state = action.payload
            return state
        case 'GETLANG':
            return state
        default:
            return state
    }
}

export default langreducer