import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm  lg:w-96">
          <SignIn
            appearance={{
              variables: {
                colorPrimary: "#1F2937",
              },
            }}
          />
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80"
          alt="Egg sandwich"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
