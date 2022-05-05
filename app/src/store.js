import UserManager from './model/UserManager.jsx';
import PartieManager from './model/PartieManager.jsx';
import TypePartieManager from './model/TypePartieManager.jsx';

const STORE = {
    userManager: new UserManager(),
    partieManager: new PartieManager(),
    typePartieManager: new TypePartieManager()
};

export default STORE;