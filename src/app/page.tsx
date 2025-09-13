import { Button } from "@/components/ui/button";
import { SiShopify } from "react-icons/si";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Button asChild className="flex items-center justify-center gap-2 px-6 py-3">
          <a href="https://apps.shopify.com/smart-shipping" target="_blank" rel="noopener noreferrer">
            <SiShopify className="w-5 h-5" />
          </a>
        </Button>
      </main>
    </div>
  );
}
