import { ADD_SUBMENU} from "./actions-constants";
import { REMOVE_SUBMENU} from "./actions-constants";

export const addSubmenu = (id: number) => ({
        type: ADD_SUBMENU,
        id
});

export const removeSubmenu = (id: number) => ({
        type: REMOVE_SUBMENU,
        id
});

