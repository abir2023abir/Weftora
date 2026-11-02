import type { Metadata } from "next";
import Legal from "@/components/Legal";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function Page() {
  return (
    <Legal
      title="Cookie Policy"
      updated="November 1, 2026"
      sections={[
        ["What are cookies?", "Cookies are small text files stored on your device that help websites remember your preferences and understand how they are used."],
        ["Essential cookies", "These keep the site working — for example, remembering your cookie choice. They cannot be switched off."],
        ["Analytics cookies", "With your consent, we use anonymous analytics to understand which pages are most useful."],
        ["Managing cookies", "You can accept or decline non-essential cookies using our banner, and clear cookies at any time in your browser settings."],
        ["Contact", "Questions about cookies? Email hello@weftora.com."],
      ]}
    />
  );
}
