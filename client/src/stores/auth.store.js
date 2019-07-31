import { observable, action } from 'mobx';

class AuthStore {
    @observable token = '';

    @action
    setToken() {
        console.log('keru')
    }
}

const authStore = new AuthStore();
export default authStore;