// stores/paramsStore.ts
import { create } from "zustand";

type State = {
  pageNumber: number;
  pageSize: number;
  pageCount: number;
  searchTerm: string;

};

type Actions = {
  setParams: (params: Partial<State>) => void;
  reset: () => void;
};

const initialState: State = {
  pageNumber: 1,
  pageSize: 4,
  pageCount: 0,
  searchTerm: "",
};

export const useParamsStore = create<State & Actions>((set) => ({
  ...initialState,

  setParams: (newParams: Partial<State>) => {
    set((state) => ({
      ...state,
      ...newParams,
      pageNumber: newParams.pageSize && newParams.pageSize !== state.pageSize ? 1 : (newParams.pageNumber ?? state.pageNumber),
    }));
  },

  reset: () => set(initialState),
}));
