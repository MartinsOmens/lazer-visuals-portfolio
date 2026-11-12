import AboutMe from "./(home)/_components/AboutMe";
import Catalogue from "./(home)/_components/Catalogue";
import GallerySection from "./(home)/_components/GallerySection";
import HeroSection from "./(home)/_components/HeroSection";
import PhotographyShowcase from "./(home)/_components/PhotographyShowcase";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PhotographyShowcase/>
      <Catalogue />
      <AboutMe/>
      <GallerySection/>
    </main>
  );
}
