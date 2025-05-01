import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import Link from "next/link";
import Footer from "@/components/footer";
import { Sparkles, Scale, Link as LinkIcon, Wallet, LineChart, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="px-16">
        {/* First Section */}
        <section className="h-screen justify-center items-center flex flex-col gap-8">
          <div className="flex flex-col items-end justify-center" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-9xl xl:text-[196px] drop-shadow-2xl font-bold text-primary">RECO</h1>
            <div className="text-end xl:text-xl drop-shadow-2xl text-primary/80">
              <h2>Get Your Product,</h2>
              <h2>Faster than You Think!</h2>
            </div>
          </div>
        </section>

        {/* Second Section */}
        {/* <section className="h-screen justify-center items-center flex flex-col gap-12">
          <div className="relative">
            <div className="w-96 h-96 overflow-hidden">
              <Image src="/assets/illustrations/blue-wavy.jpg" alt="Start Using RECO!" width={400} height={400} className="shadow-md object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-4 text-center w-full">
              <h1 className="text-4xl drop-shadow-2xl font-bold text-primary">START RECO NOW!</h1>
            </div>
          </div>

          <div className="flex w-full max-w-3xl items-center space-x-2" data-aos="fade-up" data-aos-delay="200">
            <Input className="hidden lg:block" type="text" placeholder="What's the best Gaming Monitor in budget range of 200$?" />
            <Input className="lg:hidden" type="text" placeholder="What's the best Gaming Monitor for 200$?" />
            <Button asChild>
              <Link href="/chat/1">Ask</Link>
            </Button>
          </div>
        </section> */}

        {/* Third Section */}
        <section className="h-screen justify-center items-center flex flex-col gap-8 xl:gap-12">
          {/* RECO Explanation */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl xl:text-7xl drop-shadow-2xl font-bold text-primary text-center" data-aos="fade-up" data-aos-delay="100">What is RECO?</h1>
            <div className="text-center max-w-7xl text-lg xl:text-xl drop-shadow-2xl text-primary/80" data-aos="fade-up" data-aos-delay="200">
              <h2>RECO is an AI-powered platform designed to provide personalized product recommendations tailored to your unique preferences and needs. <span className="hidden xl:inline">By analyzing your inputs, such as budget, purpose, and style, RECO simplifies the decision-making process, ensuring you find the perfect product without the hassle of endless research.</span></h2>
            </div>
          </div>

          {/* RECO Way of Works */}
          <div className="max-w-7xl text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                  <div className="text-primary text-3xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-2">Describe What You Need</h3>
                  <p className="text-muted-foreground">
                    Tell RECO your preferences - like budget, purpose, or style. Our chat understands your needs.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                  <div className="text-primary text-3xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-2">Let the AI Compare</h3>
                  <p className="text-muted-foreground">
                    Our system searches, analyzes, and ranks the best options so you don't have to do the digging.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-2 xl:col-span-1">
                <div className="group bg-card/20 p-6 lg:flex xl:flex-col xl:gap-0 lg:gap-6 lg:items-center rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                  <div className="text-primary text-3xl font-bold mb-4 lg:mb-0 xl:mb-4">3</div>
                  <div className="lg:text-start xl:text-center">
                    <h3 className="text-xl font-semibold mb-2">Pick What's Perfect</h3>
                    <p className="text-muted-foreground">
                      Instantly get links, breakdowns, and comparisons - then just choose what works best for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Section */}
        <section className="h-screen justify-center items-center flex flex-col">
          <div className="max-w-7xl text-center" data-aos="fade" data-aos-delay="100">
            <Image src="/assets/illustrations/man-sit.png" alt="Why RECO?" width={600} height={400} className="rounded-3xl mt-8" />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl xl:text-7xl drop-shadow-2xl font-bold text-primary" data-aos="fade-up" data-aos-delay="100">Why RECO?</h1>
            <div className="text-lg xl:text-xl drop-shadow-2xl text-primary/80 max-w-7xl" data-aos="fade-up" data-aos-delay="200">
              <h2>RECO is not just another recommendation tool. It's a game-changer in the world of online shopping. With its unique features and user-centric design, RECO ensures that you find the perfect product without the hassle of endless research.</h2>
            </div>
          </div>
        </section>

        {/* Fifth Section */}
        <section className="h-screen justify-center items-center flex flex-col gap-8 xl:gap-12">
          {/* RECO Feature & Benefit */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="text-4xl xl:text-7xl drop-shadow-2xl font-bold text-primary" data-aos="fade-up" data-aos-delay="100">RECO Feature & Benefit</h1>
            <div className="text-center text-lg xl:text-xl drop-shadow-2xl text-primary/80" data-aos="fade-up" data-aos-delay="200">
              <h2>Discover how RECO can revolutionize your shopping experience with its cutting-edge features and unmatched benefits.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-left">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                <div className="flex gap-2 items-center mb-2">
                  <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">AI-Powered Recommendations</h3>
                </div>
                <p className="text-muted-foreground">
                  Get personalized product picks based on your preferences — no more endless scrolling or watching reviews.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                <div className="flex gap-2 items-center mb-2">
                  <Scale className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Clear Comparisons</h3>
                </div>
                <p className="text-muted-foreground">
                  Side-by-side breakdowns of specs, prices, and reviews — so you can decide with confidence.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                <div className="flex gap-2 items-center mb-2">
                  <LinkIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Instant Links</h3>
                </div>
                <p className="text-muted-foreground">
                  Skip the hunt — we'll give you direct links to the best options right after the recommendation.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="lg:hidden">
              <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                <div className="flex gap-2 items-center mb-2">
                  <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">And Many More!</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore features designed to make your shopping journey seamless, efficient, and enjoyable.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="hidden lg:block">
              <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                <div className="flex gap-2 items-center mb-2">
                  <Wallet className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Smart Budget Matching</h3>
                </div>
                <p className="text-muted-foreground">
                  Tell us your budget, and we'll only show options that fit — no more falling in love with things you can't afford.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="hidden lg:block">
              <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                <div className="flex gap-2 items-center mb-2">
                  <LineChart className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Real-Time Market Insights</h3>
                </div>
                <p className="text-muted-foreground">
                  Stay up-to-date with dynamic product trends, reviews, and availability — powered by live data.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="hidden lg:block">
              <div className="group bg-card/20 p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105 hover:bg-card/70">
                <div className="flex gap-2 items-center mb-2">
                  <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Community-Backed Choices</h3>
                </div>
                <p className="text-muted-foreground">
                  See what others with similar preferences chose and loved — recommendations you can trust, not just algorithms.
                </p>
              </div>
            </div>
          </div>
        </section >
      </div >
      <Footer />
    </>
  );
}
