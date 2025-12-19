"use cache";
import { draftMode } from "next/headers";
import { fetchRandomData } from "@/lib/fetchRandomData";

export async function generateStaticParams() {
  return [];
}

export default async function Home() {
  const data = await fetchRandomData();
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
