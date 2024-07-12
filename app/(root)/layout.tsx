import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChildProps } from "@/types";

function Layout({ children }: ChildProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
