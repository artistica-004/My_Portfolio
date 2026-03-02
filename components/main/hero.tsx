import { HeroContent } from "@/components/sub/hero-content";
import { HeroScene } from "@/components/sub/hero-3d-scene";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full min-h-screen">
      {/* 3D Scene Background */}
      {/* <div className="absolute inset-0 opacity-60">
        <HeroScene />
      </div> */}

      {/* Video background - subtle */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 opacity-40"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
