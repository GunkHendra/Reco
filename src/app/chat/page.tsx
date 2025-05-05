import Image from "next/image";

export default function Chat() {
  return (
    <>
      <div className="min-h-screen justify-center items-center flex flex-col gap-8">
        <Image
          src="/assets/illustrations/warning.png"
          alt="Background image"
          width={500}
          height={500}
          objectFit="cover"
          className="absolute z-0"

        />
        <div className="relative z-10 text-white bg-background/80 w-full">
          <h1 className="text-3xl md:text-5xl lg:text-7xl drop-shadow-2xl p-4 font-bold text-primary text-center">THIS FEATURE IS NOT AVAILABLE YET!</h1>
        </div>
      </div>
    </>
  );
}
