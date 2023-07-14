import { produce } from "immer";
import { create } from "zustand";
type modal = {
  isModalShown: boolean;
  closeModal: () => void;
  openModal: () => void;
};
export const useModalStore = create<modal>((set) => ({
  isModalShown: false,
  closeModal: () => set(produce((_state) => ({ isModalShown: false }))),
  openModal: () => set(produce((_state) => ({ isModalShown: true }))),
}));
