import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PollState {
  poll: Record<string, string>;
  masks: Record<string, string>;
}

interface Actions {
  setAnswer: (payload: { questionId: string; answerId: string }) => void;
  setMask: (payload: { mask: string; answerId: string }) => void;
}

export const usePollStore = create(
  persist<PollState & Actions>(
    (set) => ({
      poll: {},
      masks: {},
      setAnswer: ({ answerId, questionId }) =>
        set((state) => {
          const newPoll = { ...state.poll, [questionId]: answerId };
          return { poll: newPoll };
        }),
      setMask: ({ mask, answerId }) =>
        set((state) => {
          const newMask = { ...state.masks, [mask]: answerId };
          return { masks: newMask };
        }),
    }),

    {
      name: "bearStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
