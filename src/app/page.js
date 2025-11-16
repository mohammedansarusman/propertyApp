import Image from "next/image";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectedDB from "@/config/database";


export default function Home() {
  connectedDB();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      
    </>
  );
}
