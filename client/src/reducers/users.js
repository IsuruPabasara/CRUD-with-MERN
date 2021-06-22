export default (users = [],action) => {
    switch(action.type) {
        case 'FETCH_ALL_USERS':
                return action.payload;
        case 'CREATE_USERS':
            return [...users,action.payload];
        default:
            return users;
    }
}