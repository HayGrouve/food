import { type AppType, type AppProps } from "next/app";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import Login from "./login/login";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
