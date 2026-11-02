import type { Metadata } from "next";
import Legal from "@/components/Legal";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <Legal
      title="Terms & Conditions"
      updated="November 1, 2026"
      sections={[
        ["Acceptance", "By using this website you agree to these terms. If you do not agree, please do not use the site."],
        ["Use of content", "All text, illustrations and designs on this site belong to Weftora Global Sourcing and may not be reproduced without written permission."],
        ["Product information", "Product images and specifications are for illustration only. Final specifications are confirmed in each purchase order."],
        ["Orders & quotations", "Quotations are valid for 30 days unless stated otherwise. Orders are governed by the agreed purchase contract."],
        ["Limitation of liability", "We are not liable for indirect or consequential loss arising from use of this website."],
        ["Governing law", "These terms are governed by the laws of the Hong Kong Special Administrative Region."],
      ]}
    />
  );
}
