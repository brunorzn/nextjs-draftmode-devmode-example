"use cache";
import { draftMode } from "next/headers";

async function getRandomData(): Promise<number> {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
  );
  const rand = await res.text();
  return parseInt(rand);
}

export default async function Home() {
  const data = await getRandomData();
  const draftModeInstance = await draftMode();
  if (draftModeInstance.isEnabled) {
    return (
      <div>
        <h1>Draft mode is enabled: {data}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>NO DRAFT MODE: {data}</h1>
    </div>
  );
}
