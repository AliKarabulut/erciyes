"use client";
import { useSearchParams } from "next/navigation";

const SUSPENSE = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("a");
  return (
    <section id="resources" className="overflow-hidden bg-black pb-36 pt-24">
      Search: {search}
    </section>
  );
};

export default SUSPENSE;
