import { atom } from "recoil";

export const isLoadingAtom = atom({
  key: "isLoadingAtom",
  default: {
    isLoading: false,
  },
});
