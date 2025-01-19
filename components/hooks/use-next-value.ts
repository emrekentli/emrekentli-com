export default function useNextValue<T>(array: readonly T[], currentValue: T): T {
  const currentIndex = array.indexOf(currentValue);
  const nextIndex = (currentIndex + 1) % array.length;
  return array[nextIndex];
} 