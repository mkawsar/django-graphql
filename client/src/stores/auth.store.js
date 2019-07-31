import {observable, action} from 'mobx';

class AuthStore {
    @action
    storeTokenInLocalStorage(accessToken) {
        localStorage.setItem('token', accessToken.tokenAuth.token);
    }
}

const authStore = new AuthStore();
export default authStore;