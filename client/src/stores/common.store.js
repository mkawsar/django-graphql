import { observable, action } from 'mobx';

class CommonStore {
    @observable appName = 'Apollo + React + GraphQL + Mobx';
    @observable appCreator = 'Kawsar Ahmed'
}

var commonStore = new CommonStore();
export default commonStore;
