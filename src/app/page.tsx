import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import Link from "next/link";
import Footer from "@/components/footer";
import { Sparkles, Scale, Link as LinkIcon, Wallet, LineChart, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <div>
        {/* First Section */}
        <section className="h-screen flex flex-col md:justify-between md:flex-row-reverse gap-4">

          {/* Image Section */}
          <div className="md:hidden relative w-full aspect-[4/5] h-[70%] overflow-hidden rounded-xl bottom-fade-mask">
            <Image src="/assets/illustrations/blue-wavy.jpg" alt="Fading image" fill className="w-full h-auto object-cover" />
          </div>

          <div className="relative">
            <div>
              <Image src="https://placehold.co/600x600.png" alt="placeholder" width={600} height={600} className="rounded-4xl hidden md:block" />
              <Image src="https://placehold.co/250x250.png" alt="placeholder" width={250} height={250} className="hidden z-20 absolute -bottom-15 right-20 rounded-4xl 2xl:block" />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center w-full md:max-w-2xl max-h-screen px-12 gap-4">
            <div className="text-center xl:text-start">
              <h1 className="text-2xl sm:text-3xl font-semibold text-primary">Get Your Product,</h1>
              <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-secondary-foreground to-secondary bg-clip-text text-transparent">Faster than You Think</h2>
            </div>
            <p className="hidden xl:block">
              Combination of cutting-edge technologies with personalized insights and a user-friendly interface, Recommetra is designed to deliver tailored product recommendation just for you.
            </p>
            <div className="flex w-full items-center space-x-2">
              <Input className="hidden lg:block" type="text" placeholder="What's the best Gaming Monitor in budget range of 200$?" />
              <Input className="lg:hidden" type="text" placeholder="What's the best Gaming Monitor for 200$?" />
              <Button type="submit">Ask</Button>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center py-2 space-x-40">
          <div data-aos="fade-up-right">
            <Image src="https://placehold.co/600x600.png" alt="placeholder" width={600} height={600} className="rounded-4xl" />
          </div>
          <div className="flex flex-col gap-8 items-start" data-aos="fade-up-left">
            <div className="space-y-4">
              <h2 className="text-5xl font-semibold text-primary">Overwhelmed by choices?</h2>
              <p className="text-primary text-lg">
                With so many reviews, tabs, and specs to compare, finding the right product can feel impossible.
              </p>
              <ul className="list-disc list-inside text-primary space-y-1 pl-2">
                <li>Hours spent watching YouTube reviews</li>
                <li>Conflicting advice from different sources</li>
                <li>Still unsure what's actually worth it</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-semibold text-primary">Let Recommetra Decide Smarter</h2>
              <p className="text-primary text-lg">
                Just tell us what you need — Recommetra delivers smart, personalized product recommendations using AI.
              </p>
              <ul className="list-disc list-inside text-primary space-y-1 pl-2">
                <li>Instant suggestions based on your preferences</li>
                <li>Side-by-side comparisons with reasoning</li>
                <li>No more research rabbit holes</li>
              </ul>
              <Button className="mt-4">
                Try Recommetra Now
              </Button>
            </div>
          </div>
        </section>

        <section className="h-screen py-2 flex justify-center items-center">
          <div className="max-w-7xl px-8 text-center">
            <div data-aos="fade-up">
              <h2 className="text-5xl font-semibold text-primary mb-4">How Recommetra Works</h2>
              <p className="text-muted-foreground text-lg mb-12">
                Just a few steps to find your perfect product — no stress, no overthinking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="300">
              <div className="group bg-card p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105">
                <div className="text-primary text-3xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Describe What You Need</h3>
                <p className="text-muted-foreground">
                  Tell Recommetra your preferences — like budget, purpose, or style. Our chat understands your needs.
                </p>
              </div>

              <div className="group bg-card p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105">
                <div className="text-primary text-3xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Let the AI Compare</h3>
                <p className="text-muted-foreground">
                  Our system searches, analyzes, and ranks the best options so you don't have to do the digging.
                </p>
              </div>

              <div className="group bg-card p-6 rounded-2xl shadow-md transition transform duration-300 hover:scale-105">
                <div className="text-primary text-3xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Pick What's Perfect</h3>
                <p className="text-muted-foreground">
                  Instantly get links, breakdowns, and comparisons — then just choose what works best for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center py-2">
          <div className="max-w-7xl px-8 text-center">
            <div data-aos="fade-up">
              <h2 className="text-5xl font-semibold text-primary mb-4">Features & Benefits</h2>
              <p className="text-muted-foreground text-lg mb-12">
                Everything you need to confidently choose the best product.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-card p-6 rounded-2xl shadow-sm transition hover:shadow-md">
                <div className="flex gap-2 items-center mb-2">
                  <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">AI-Powered Recommendations</h3>
                </div>
                <p className="text-muted-foreground">
                  Get personalized product picks based on your preferences — no more endless scrolling or watching reviews.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-sm transition hover:shadow-md">
                <div className="flex gap-2 items-center mb-2">
                  <Scale className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Clear Comparisons</h3>
                </div>
                <p className="text-muted-foreground">
                  Side-by-side breakdowns of specs, prices, and reviews — so you can decide with confidence.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-sm transition hover:shadow-md">
                <div className="flex gap-2 items-center mb-2">
                  <LinkIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Instant Links</h3>
                </div>
                <p className="text-muted-foreground">
                  Skip the hunt — we'll give you direct links to the best options right after the recommendation.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-sm transition hover:shadow-md">
                <div className="flex gap-2 items-center mb-2">
                  <Wallet className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Smart Budget Matching</h3>
                </div>
                <p className="text-muted-foreground">
                  Tell us your budget, and we'll only show options that fit — no more falling in love with things you can't afford.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-sm transition hover:shadow-md">
                <div className="flex gap-2 items-center mb-2">
                  <LineChart className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Real-Time Market Insights</h3>
                </div>
                <p className="text-muted-foreground">
                  Stay up-to-date with dynamic product trends, reviews, and availability — powered by live data.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-sm transition hover:shadow-md">
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
        </section>
      </div >
      <Footer />
    </>
  );
}
