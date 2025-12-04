import { draftMode } from 'next/headers';
import { Suspense } from 'react';

async function getRandomData(): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1_000));
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
  );
  const rand = await res.text();
  return parseInt(rand);
}

export default async function Home() {
  const { isEnabled } = await draftMode();

  return isEnabled ? (
    <Suspense fallback="Loading draft content...">
      <DraftContent />
    </Suspense>
  ) : (
    <PublishedContent />
  );
}

async function DraftContent() {
  const data = await getRandomData();

  return (
    <div>
      <h1>Draft mode is enabled: {data}</h1>
    </div>
  );
}

async function PublishedContent() {
  'use cache';
  const data = await getRandomData();

  return (
    <div>
      <h1>NO DRAFT MODE: {data}</h1>
    </div>
  );
}
