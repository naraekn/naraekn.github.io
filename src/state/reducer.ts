import { Menus } from '../types/enums';
import { SET_CATEGORY, SET_IS_MOBILE, SET_MENU, SET_PATH } from './actions';

export interface RootState {
  path: string;
  size: string;
  isMobile: boolean;
  menu: Menus;
  category: string;
}

export const initialState: RootState = {
  path: '',
  size: '25px',
  isMobile: false,
  menu: Menus.Home,
  category: '',
};

const reducer = (state: RootState = initialState, action: any) => {
  const { type, payload } = action;

  if (type === SET_PATH) {
    const { path, size } = state;

    return {
      ...state,
      path: payload.path ?? path,
      size: payload.size ?? size,
    };
  }

  if (type === SET_IS_MOBILE) {
    return {
      ...state,
      isMobile: payload.isMobile
    }
  }

  if (type === SET_MENU) {
    return ({
      ...state,
      menu: payload.menu
    });
  }

  if (type === SET_CATEGORY) {    
    return ({
      ...state,
      category: payload.category
    });
  }

  return state;
};

export default reducer;
