import {observable, action} from 'mobx';
import NotificationStore from 'react-mobx-notification-system';

class AuthStore {
    @observable isLoggedIn = localStorage.getItem('token') !== null;

    @action
    storeTokenInLocalStorage(accessToken) {
        localStorage.setItem('token', accessToken.tokenAuth.token);
        this.isLoggedIn = true;
        NotificationStore.addNotification({
            title: 'Success',
            message: 'You have successfully logged in.',
            level: 'success'
        });
    }

    @action
    userLogout() {
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        NotificationStore.addNotification({
            title: 'Success',
            message: 'You have successfully logged out.',
            level: 'success'
        });
    }
}

const authStore = new AuthStore();
export default authStore;