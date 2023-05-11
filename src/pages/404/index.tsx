import Image from "next/image";
import Link from "next/link";

export default function Error404() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-1 grid-rows-[1fr,auto,1fr] bg-gray-200 lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <Link href={"/"}>
            <span className="sr-only">Your Company</span>
            <Image
              className="h-10 w-auto sm:h-12"
              src="/logo.png"
              alt="logo"
              width={1000}
              height={1000}
            />
          </Link>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-xl font-semibold leading-8 text-red-500">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <Link href={"/"}>
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </main>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80"
            alt="Egg sandwich"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
