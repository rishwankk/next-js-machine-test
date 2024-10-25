import TextColumns from "@/components/TextColoumn";
import Top from "@/components/Top";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <Top />
      <VideoSection />
      <TextColumns />
    </div>
   
  );
}
