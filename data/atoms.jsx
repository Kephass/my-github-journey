import { atom } from 'recoil';

export const searchStateAtom = atom({
	key: 'searchKey',
	default: '',
});
