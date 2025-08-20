import ParticlesBg from "@/components/bgGradientEffect";
import NavigationBar from "@/components/navigationbar";
import GrainOverlay from "@/components/grainoverlay";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import WorksPage from "@/pages/works";
import ContactPage from "@/pages/contact";

export default function Home() {
  return (
    <>
      <ParticlesBg />
      <NavigationBar />
      <GrainOverlay />
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <WorksPage />
      <ContactPage />
    </>
  );
}
