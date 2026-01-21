import { Suspense } from "react";
import Loading from "@/app/components/ui/Loading";
import EmailClient from "../components/EmailClient";

export default function EmailPage() {
  return (
    <Suspense fallback={<Loading />}>
      <EmailClient />
    </Suspense>
  );
}
