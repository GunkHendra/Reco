import Image from "next/image";
// import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="xl:gap-12 pb-6 flex flex-col gap-8">
        <section className="min-h-screen justify-center items-center flex flex-col" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-5xl lg:text-7xl drop-shadow-2xl font-semibold text-primary">About Us</h1>
            <div className="text-end gap-4 flex text-sm lg:text-xl drop-shadow-2xl text-primary/80">
              <h2>Home</h2>
              <h2>/</h2>
              <h2>About Us</h2>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" data-aos-delay="200">
          <div className="min-h-screen px-6 lg:px-12 gap-8 flex flex-col md:flex-row items-start md:justify-center md:items-center xl:px-52">
            <div className="h-64 md:h-52 w-full overflow-hidden relative rounded-lg shadow-lg">
              <Image src="/assets/illustrations/man-work.jpg" alt="Image" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 xl:gap-4 md:max-w-md lg:max-w-lg xl:max-w-none">
              <h1 className="text-2xl lg:text-4xl drop-shadow-2xl font-semibold text-primary">RECO: Your Smart Shopping Companion</h1>
              <h2 className="text-sm lg:text-md drop-shadow-2xl text-primary/80 text-justify">RECO is an AI-powered platform designed to help you make smarter and faster product decisions. Whether you&#39;re searching for the best tech gadgets or budget-friendly options, RECO analyzes your preferences and gives you personalized recommendations — so you don&#39;t have to spend hours watching reviews or comparing products manually.</h2>
              <div className="flex w-full max-w-3xl items-center space-x-2 mt-1">
                <Input className="hidden lg:block" type="text" placeholder="What's the best Gaming Monitor in budget range of 200$?" />
                <Input className="lg:hidden" type="text" placeholder="What's the best Gaming Monitor for 200$?" />
                <Button asChild>
                  <Link href="/chat">Ask</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" data-aos-delay="200">
          <div className="min-h-screen px-6 lg:px-12 gap-8 flex flex-col md:flex-row-reverse items-center md:justify-center md:items-center xl:px-52">
            <Image src="/assets/logos/logo.png" alt="RECO Logo" width={600} height={400} className="w-auto max-h-48 lg:max-h-56" />
            <div className="flex flex-col gap-2 items-start xl:items-end">
              <h1 className="text-2xl lg:text-4xl drop-shadow-2xl font-semibold text-primary xl:text-end">Crafted by Passion, Driven by Purpose</h1>
              <div className="flex flex-col gap-2 text-sm lg:text-md drop-shadow-2xl text-primary/80 text-justify xl:text-end">
                <h2>RECO is the result of a solo developer&#39;s vision to simplify the online shopping experience using modern technology and intelligent systems. With a deep interest in software development, machine learning, and UI/UX design, this project was born out of a desire to build something truly helpful and impactful.<span className="hidden xl:inline">While the team may be small today, the ambition is big — to create a platform that feels personal, smart, and truly user-centric. Along the journey, RECO is also supported by AI tools that help shape the development process, including content refinement and interface ideation.</span></h2>
                <h2 className="xl:hidden">While the team may be small today, the ambition is big — to create a platform that feels personal, smart, and truly user-centric. Along the journey, RECO is also supported by AI tools that help shape the development process, including content refinement and interface ideation.</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[30vh] flex items-center justify-center overflow-hidden" data-aos="fade" data-aos-delay="200">
          <Image
            src="/assets/illustrations/product.jpg"
            alt="Background image"
            width={2000}
            height={2000}
            className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-[40%] blur-[2px] md:blue[5px] shadow-lg"
          />
          <div className="relative z-10 text-center px-4 max-w-md lg:max-w-3xl">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-medium text-primary drop-shadow-2xl">
              We Don&#39;t just Recommend Products — We Empower Decisions.
            </h1>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
}
