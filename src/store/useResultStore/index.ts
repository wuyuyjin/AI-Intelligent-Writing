import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import createSelectors from "../../utils/selectors.ts";

interface resultType {
  result: string,
  changeResult: (token: string) => void
}

const useResultStore = createSelectors(create<resultType>()(immer((set) => ({
  result: "",
  changeResult: (result) => set(() => ({
    result: result
  }))
}))))

export default useResultStore