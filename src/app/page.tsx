import ParticlesBg from "@/components/bgGradientEffect";
import NavigationBar from "@/components/navigationbar";
import GrainOverlay from "@/components/grainoverlay";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";

export default function Home() {
  return (
    <>
      <ParticlesBg />
      <NavigationBar />
      <GrainOverlay />
      <HomePage />
      <AboutPage />
    </>
  );
}
