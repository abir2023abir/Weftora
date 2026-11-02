import type { Metadata } from "next";
import AdminLogin from "@/components/AdminLogin";

export const metadata: Metadata = { title: "Admin Login", robots: { index: false } };

export default function Page() {
  return <AdminLogin />;
}
