import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-4">
        <div className="w-full md:max-w-md md:rounded-2xl md:bg-card/20 md:shadow-lg md:border md:p-8 flex flex-col items-center gap-2">
          <div className="w-full items-start">
            {/* Logo */}
            <Image
              src="/assets/logos/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-auto"
            />
          </div>

          {/* Title */}
          <div className="w-full items-start">
            <h1 className="text-xl font-medium text-start text-primary lg:text-2xl">
              Create a new account
            </h1>
          </div>

          {/* Login Form */}
          <form className="w-full flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 lg:text-lg"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 lg:text-lg"
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 lg:text-lg"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 lg:text-lg"
            />
            <Button
              type="submit"
              className="w-full py-2 rounded-md lg:text-lg"
            >
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center w-full max-w-sm my-6">
            <div className="flex-grow h-px bg-primary" />
            <span className="mx-4 text-sm lg:text-lg text-muted-foreground">or sign in with</span>
            <div className="flex-grow h-px bg-primary" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <Button className="bg-primary rounded-full p-1 w-12 h-12">
              <Image src="/assets/logos/google.svg" alt="Google" width={32} height={32} className="object-fit" />
            </Button>
            <Button className="bg-primary rounded-full p-1 w-12 h-12">
              <Image src="/assets/logos/facebook.png" alt="Facebook" width={32} height={32} className="object-fit" />
            </Button>
            <Button className="bg-primary rounded-full p-1 w-12 h-12">
              <Image src="/assets/logos/x.png" alt="X (Twitter)" width={32} height={32} className="object-fit" />
            </Button>
          </div>

          {/* Register Link */}
          <p className="text-sm lg:text-lg text-muted-foreground">
            Already have an account?{" "}
            <Button variant="link" asChild className="p-0 lg:text-lg text-blue-500">
              <a href="/auth/login">Login</a>
            </Button>
          </p>
        </div>
      </div>
    </>
  );
}
