import UserManager from './model/UserManager.jsx';
import PartieManager from './model/PartieManager.jsx';

const STORE = {
    userManager: new UserManager(),
    partieManager: new PartieManager()
};

export default STORE;