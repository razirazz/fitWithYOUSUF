import ParticlesBg from "@/components/bgGradientEffect";
import NavigationBar from "@/components/navigationbar";
import GrainOverlay from "@/components/grainoverlay";
import HomePage from "@/pages/home";

export default function Home() {
  return (
    <>
      <ParticlesBg />
      <NavigationBar />
      <GrainOverlay />
      <HomePage />
    </>
  );
}
