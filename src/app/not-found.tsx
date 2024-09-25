import Button from "@/components/CTA/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-20 h-hero w-full grid place-items-center">
      <div className="flex flex-col gap-2 items-center">
        <p>
          Looks like you&apos;re floating in space!
          <br />
          Or maybe this page doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button variant="solid" color="primary" radius="md">
            Back to homepage
          </Button>
        </Link>
      </div>
    </main>
  );
}
