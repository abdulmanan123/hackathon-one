import Image from 'next/image'
import { HeroBanner } from "@/components/HeroBanner";
import { EventsBanner } from "@/components/EventsBanner";
import { FeaturesBanner } from "@/components/FeaturesBanner";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <EventsBanner />

      <FeaturesBanner />
      <Newsletter />
    </>
  );
}
