import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <section className="h-screen flex items-center justify-center space-x-8">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
          <div className="flex flex-col gap-4">
            <h1 className="text-9xl font-semibold text-primary">Recommetra</h1>
            <div className="flex w-full items-center space-x-2">
              <Input type="text" placeholder="What's the best Gaming Monitor in budget range of 200$?" />
              <Button type="submit">Ask</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
