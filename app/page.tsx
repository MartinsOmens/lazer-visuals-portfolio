import Catalogue from "./(home)/_components/Catalogue";
import HeroSection from "./(home)/_components/HeroSection";
import PhotographyShowcase from "./(home)/_components/PhotographyShowcase";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PhotographyShowcase/>
      <Catalogue />
    </main>
  );
}
