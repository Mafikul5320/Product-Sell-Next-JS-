import Image from "next/image";
import ProductPage from "./components/Product";
import HeroSection from "./components/HeroSection";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <div>
      <HeroSection />
      <span className="flex justify-center font-bold text-xl">{JSON.stringify(session)}</span>
      <ProductPage />

    </div>
  );
}
