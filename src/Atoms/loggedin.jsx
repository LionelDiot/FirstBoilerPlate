import  {currentUserAtom } from './currentuser';
import { atom } from 'jotai';

export const loggedInAtom = atom((get) => {
    const currentuser = get(currentUserAtom);
    if (currentuser == null) {
      
    return false;
    }
    else {
      
      return true;
    }
});
