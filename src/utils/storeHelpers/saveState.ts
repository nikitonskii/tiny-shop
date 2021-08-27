import { RootState } from "../../store/reducers";

export const saveStateHelper = (state: RootState, stateName: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
