import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import FloatingActions from "./floatingActions";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <>
        <Navbar />
        <>{children}</>
        <Footer />
      </>
      <FloatingActions />
    </>
  );
};

export default Layout;
