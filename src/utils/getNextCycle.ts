export function getNextCycle(currentCyclo: number) {
  // return currentCyclo === 0 || currentCyclo === 8 ? 1 : currentCyclo + 1
  if (currentCyclo === 0 || currentCyclo === 8) {
    return 1;
  } else {
    return currentCyclo + 1;
  }
}
