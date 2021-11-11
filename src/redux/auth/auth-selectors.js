const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

// const getUserEmail = state => state.auth.user.avatar;

export const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail, 
    // getUserAvatar
}