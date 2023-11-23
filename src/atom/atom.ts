import {atom} from 'recoil';

export const loginState = atom<boolean>({
  key:'todoListState',
  default: false,
})