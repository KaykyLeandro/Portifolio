import Image from "next/image";

import About from "@/components/Home/About";
import Knowledge from "@/components/Home/Knowledge";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-3">
      <About />
      <Knowledge />
    </div>
  );
}
