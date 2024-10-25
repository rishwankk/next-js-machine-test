
import Image from "next/image";
import Top from "../components/Top";
import VideoSection from "../components/VideoSection";
import TextColumns from "../components/TextColoumn";
import ImageGrid from "../components/ImageComponent";
import StatsCounter from "../components/CompanyCount";
import TextCard from "../components/TextCard";
import EducationHighlight from "../components/EducatiionCard";
import LatestInsights from "../components/LatestInsights";
import CareersSection from "../components/CareerSection";

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
