export const saveState = (state: any, stateName: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
