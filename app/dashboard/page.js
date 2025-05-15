import Image from "next/image";
import IMG_3303 from "@/public/IMG_3303.jpg";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Image
        src={IMG_3303}
        alt="myself"
        width={300}
        height={300}
        className="w-full rounded-full border border-gray-200 dark:border-gray-800"
      />
    </div>
  );
}
