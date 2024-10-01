import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import createSelectors from "../../utils/selectors.ts";

interface referenceCopyType {
  referenceCopy: string,
  changeReferenceCopy: (token: string) => void
}

const useReferenceCopyStore = createSelectors(create<referenceCopyType>()(immer((set) => ({
  referenceCopy: "",
  changeReferenceCopy: (referenceCopy) => set(() => ({
    referenceCopy: referenceCopy
  }))
}))))

export default useReferenceCopyStore