import { create } from "zustand"

type State = {
  count: number
}

type Actions = {
  increment: () => void
  decrement: () => void
}

export const useCountStore = create<State & Actions>((set, get) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
}))
