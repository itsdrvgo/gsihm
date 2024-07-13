"use client"
import { Assosciations } from "@/components/ui/Association";
import AboutUniversity from "@/components/ui/about-uni";
import CampusInfo from "@/components/ui/campus-info";
import Header from "@/components/ui/header";
import Location from "@/components/ui/location";
import Whyus from "@/components/ui/why-us";

const Home = () =>  {
  return (
  <div>
   <Header />
   <AboutUniversity />
   <Whyus />
   <CampusInfo />
   <Assosciations />
   <Location />
  </div>
  );
}

export default Home;