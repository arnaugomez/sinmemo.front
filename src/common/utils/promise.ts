export async function waitFor(time: number) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}
