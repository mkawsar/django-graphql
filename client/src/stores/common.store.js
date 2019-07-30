import { observable, action } from 'mobx';

class CommonStore {
    @observable appName = 'Apollo + React + GraphQL + Mobx';
}

var commonStore = new CommonStore();
export default commonStore;
