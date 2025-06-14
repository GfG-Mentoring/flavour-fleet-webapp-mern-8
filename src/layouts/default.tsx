import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { useSelector } from "react-redux";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = useSelector((state:any)=> state.auth);

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <div className="text-2xl" style={{
          display: user.user.fullName ? "block" : "none"
        }}>
          Welcome back, {user.user.fullName}
        </div>
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}
