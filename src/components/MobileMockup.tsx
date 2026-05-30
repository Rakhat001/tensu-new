import Image from "next/image";

interface MobileMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export function MobileMockup({ src, alt, className = "" }: MobileMockupProps) {
  return (
    <div className={`relative border-[6px] sm:border-[8px] border-[#1e1e24] bg-[#000000] rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}>
      {/* Frame reflection / shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 pointer-events-none z-20" />
      
      {/* Dynamic Island / Camera Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 bg-black rounded-full z-30 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.1)]" />
      
      {/* Volume Buttons (Left) */}
      <div className="absolute top-24 -left-[6px] sm:-left-[8px] w-[2px] h-10 bg-[#2a2a32] rounded-l-md" />
      <div className="absolute top-36 -left-[6px] sm:-left-[8px] w-[2px] h-10 bg-[#2a2a32] rounded-l-md" />
      
      {/* Power Button (Right) */}
      <div className="absolute top-32 -right-[6px] sm:-right-[8px] w-[2px] h-12 bg-[#2a2a32] rounded-r-md" />

      {/* Screen Content */}
      <div className="relative w-full h-full bg-background rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/5">
        <Image 
          src={src} 
          alt={alt} 
          width={350} 
          height={750} 
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
