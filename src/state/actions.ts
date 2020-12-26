import { Menus } from "../types/enums";

export const SET_IS_MOBILE = 'SET_IS_MOBILE';
export const SET_PATH = 'SET_PATH';
export const SET_MENU = 'SET_MENU';
export const SET_CATEGORY = 'SET_CATEGORY';

const setIsMobile = (isMobile: boolean) => {
  return { 
    type: SET_IS_MOBILE, 
    payload: {
      isMobile
    }
  };
};

const setPath = (path: string, size?: string) => {
  return { 
    type: SET_PATH,
    payload: {
      path, size,
    }
  };
};

const setMenu = (menu: Menus) => {
  return { 
    type: SET_MENU, 
    payload: {
      menu 
    }
  };
}

const setCategory = (category: string) => {
  return { 
    type: SET_CATEGORY,
    payload: {
      category,
    }
  };
}

export const actionCreators = {
  setIsMobile,
  setPath,
  setMenu,
  setCategory,
};
