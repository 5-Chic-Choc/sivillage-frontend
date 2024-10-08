import Footer from "@/components/template/layout/Footer";
import TitleHeader from "@/components/template/layout/header/TitleHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import BrandProductTopNavBar from "@/components/template/layout/navbar/BrandPoructTopNavBar";

interface LayoutProps {
  children: React.ReactNode;
  params: { brandName: string };
}

export default function RootLayout({
  children,
  params: { brandName },
}: LayoutProps) {
  brandName = decodeURI(brandName).replace("_", "/");

  // const categories = path.map((i) => decodeURI(i));
  // const filtering = { ...searchParams, categories };

  return (
    <>
      <TitleHeader />
      <BrandProductTopNavBar {...{ brandName }} />
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
