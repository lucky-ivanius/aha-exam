import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aha",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <div className="container bg-yellow-50">{children}</div>;
}
