import Image from "next/image";
import ProductPage from "./components/Product";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductPage />

    </div>
  );
}
