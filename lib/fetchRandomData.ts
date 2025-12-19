export async function fetchRandomData(): Promise<number> {
  console.log("fetchRandomData called");
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
  );
  const rand = await res.text();
  return parseInt(rand);
}
