import { atom } from "recoil";

export const noteAtom = atom({
  key: "noteAtom",
  default: {
    id: "",
    content: "",
    problems: [],
    count: 0,
  },
});
