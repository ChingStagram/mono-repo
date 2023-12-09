import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-red-600 underline">
        Tailwind Test
      </h1>
      <p className="text-2xl bg-black">Test</p>
    </main>
  );
}
