import { Container } from "postcss";
import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col justify-between">
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
