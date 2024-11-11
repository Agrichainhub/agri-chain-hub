import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export const Header = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(
          "text-3xl font-semibold flex justify-center items-center gap-x-2",
          font.className
        )}
      >
        <Link href="/">
          <Image
            src="/images/logo-light.png"
            width={570}
            height={94}
            alt="Agrichainhub logo"
            className="w-32 "
          />
          <Image
            src="/images/logo-dark.png"
            width={570}
            height={94}
            alt="Agrichainhub logo"
            className="w-32 "
          />
        </Link>
      </h1>
      <p className=" text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
