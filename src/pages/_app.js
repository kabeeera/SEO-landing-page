import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { inter } from "@/utils/fonts";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
