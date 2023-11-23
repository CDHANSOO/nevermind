import { atom } from 'recoil';

export const darkModeState = atom<boolean>({
  key: 'darkModeState', // 고유한 키
  default: false, // 기본값은 false (라이트 모드)
});