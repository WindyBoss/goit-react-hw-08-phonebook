/** @format */

const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;
const getBeingLoggedIn = (state) => state.auth.isBeingLoggedIn;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getBeingLoggedIn,
};
export default authSelectors;