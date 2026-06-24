import Image from "next/image";
import Banner from "./Components/Banner/Banner";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Banner></Banner>
      </main>
    </div>
  );
}
