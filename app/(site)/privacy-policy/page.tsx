import type { Metadata } from "next";
import Legal from "@/components/Legal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <Legal
      title="Privacy Policy"
      updated="November 1, 2026"
      sections={[
        ["Who we are", "Weftora Global Sourcing (“Weftora”, “we”, “us”) is an apparel buying house headquartered in Hong Kong. This policy explains how we collect and use personal data when you visit our website or work with us."],
        ["Information we collect", "We collect information you give us — such as your name, company, email and phone number when you submit a form — and technical data such as browser type and pages visited."],
        ["How we use it", "We use your information to answer enquiries, manage business relationships, send updates you have asked for and improve our website."],
        ["Sharing", "We never sell personal data. We share it only with trusted service providers who help us run our business, and only as far as needed."],
        ["Retention", "We keep personal data only for as long as necessary for the purposes described here, or as required by law."],
        ["Your rights", "You may request access to, correction of or deletion of your personal data at any time by contacting hello@weftora.com."],
      ]}
    />
  );
}
