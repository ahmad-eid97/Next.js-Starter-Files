//= Components
import { Hello } from "@/components";

export const metadata = {
  title: "App Router",
};

export default async function Page() {

  return (
    <main>
      <Hello />
    </main>
  )
}
