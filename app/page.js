import Image from "next/image";
import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
        <Counter title="Counter #1" id="Counter-#1" />
        <Counter title="Counter #2" id="Counter-#2" />
        <Counter title="Counter #3" id="Counter-#3" />
      </main>
      <Link href="/dashboard" className="btn btn-primary">
        Dashboard
      </Link>
    </div>
  );
}
