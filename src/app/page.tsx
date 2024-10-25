import CareersSection from "@/components/CareerSection";
import StatsCounter from "@/components/CompanyCount";
import EducationHighlight from "@/components/EducatiionCard";
import ImageGrid from "@/components/ImageComponent";
import LatestInsights from "@/components/LatestInsights";
import TextCard from "@/components/TextCard";
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
      <ImageGrid />
      <StatsCounter />
      <TextCard />
      <EducationHighlight />
      <LatestInsights />
      <CareersSection />
    </div>
   
  );
}
