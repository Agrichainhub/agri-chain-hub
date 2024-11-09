import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#" },
  { name: "Socials", href: "#" },
];

export const metadata = {
  title: "AgrichainHub | Home",
  description: "A platform where farmers and customers interact",
};
const Homepage = () => {
  return (
    <main>
      <div className="hero flex flex-col justify-between h-screen bg-[url(/images/hero-bg.png),linear-gradient(#000,#000)] bg-black overflow-hidden">
        <header className="flex container mx-auto p-4 justify-between items-center text-white">
          <Image
            src="/images/logo-light.png"
            alt="logo"
            width={570}
            height={94}
            className="w-32"
          />
          <nav>
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.name + link.href}>
                  <Link className="hover:underline" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="buttons flex gap-2">
            <Button variant="ghost">Login</Button>
            <Button className="rounded-full bg-white text-black hover:bg-white hover:scale-105 transition-all">
              Signup
            </Button>
          </div>
        </header>
        <section className="hero text-center grow flex flex-col justify-center gap-4 bg-[linear-gradient(transparent,#173704dd_10%_90%,transparent)] min-h-[70vh] text-white">
          <h1 className="text-3xl max-w-xl mx-auto mt-auto mb-4">
            From Seed to Harvest, Farm Smarter
          </h1>
          <p className="max-w-lg mx-auto font-light">
            Revolutionize your agricultural workflow. Our intuitive tools enable
            real-time monitoring, automated reporting, and precision farming
          </p>
          <div
            className={
              "hero-image-wrapper relative w-fit mx-auto mt-auto rounded-full border p-6 " +
              "before:absolute before:top-8 before:left-8 before:right-8 before:bottom-8 before:border before:border-white before:rounded-full" +
              " after:absolute after:-top-8 after:-left-8 after:-right-8 after:-bottom-8 after:border after:border-white after:rounded-full"
            }
          >
            <Image
              src="/images/black-man.png"
              width={666}
              height={666}
              alt="A farmer"
              className="w-64 h-64 scale-150 -mt-10"
            />
          </div>
        </section>
      </div>

      <hr className="my-3 h-3 bg-gray-300" />
      <section className="quote text-center bg-gray-300 p-2 text-gray-800 text-lg">
        {"“Technology doesn't replace the farmer, it amplifies their yield”"}
      </section>
      <hr className="my-3 h-3 bg-gray-300" />

      <h2 className="text-2xl max-w-md my-8 md:ml-12">
        Procure all your farm inputs seamlessly with crypto payments:{" "}
        <span className="text-gray-700">
          including Seedlings, Fertilizers and Farm tools
        </span>
      </h2>

      <div className="water-fall-wrapper my-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]">
          <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[510px] w-[310px] rounded-full bg-[#51CA0687] blur-[100px]"></div>
        </div>
        <div className="container mx-auto">
          <div className="waterfall-pair my-8 flex gap-12 items-center justify-center">
            <div className="info max-w-sm">
              <h3 className="text-2xl text-gray-700">
                Different varieties of Seedlings:
              </h3>
              <p>
                Boost yields with crypto-bought seedlings: efficient,
                cost-effective, and hassle-free
              </p>
            </div>
            <div className="image-wrapper relative p-4 rounded-xl bg-gradient-to-t from-gray-300 ring ring-gray-300 w-40 h-auto before:absolute before:w-2 before:h-40 before:top-full before:left-1/2 before:bg-gradient-to-b before:from-gray-300">
              <Image
                src="/images/waterfall-1.png"
                width={234.06}
                height={322.08}
                alt="Closeup picture of a crop"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="waterfall-pair md:translate-x-20 my-8 flex gap-32 items-center justify-center">
            <div className="info max-w-sm">
              <h3 className="text-2xl text-gray-700">Mechanized farm tools:</h3>
              <p>
                Where technology meets agriculture: fully mechanized farming
              </p>
            </div>
            <div className="image-wrapper relative p-4 rounded-xl bg-gradient-to-t from-gray-300 ring ring-gray-300 w-40 h-auto before:absolute before:w-2 before:h-40 before:top-full before:left-1/2 before:bg-gradient-to-b before:from-gray-300">
              <Image
                src="/images/waterfall-2.png"
                width={234.06}
                height={322.08}
                alt="Closeup picture of a crop"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="waterfall-pair md:-translate-x-20 my-8 flex gap-12 items-center justify-center">
            <div className="info max-w-sm">
              <h3 className="text-2xl text-gray-700">
                Environmental friendly fertilizers:
              </h3>
              <p>Cultivate sustainability with eco-friendly fertilizers</p>
            </div>
            <div className="image-wrapper relative p-4 rounded-xl bg-gradient-to-t from-gray-300 ring ring-gray-300 w-40 h-auto before:absolute before:w-2 before:h-40 before:top-full before:left-1/2 before:bg-gradient-to-b before:from-gray-300">
              <Image
                src="/images/waterfall-3.png"
                width={234.06}
                height={322.08}
                alt="Closeup picture of a crop"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="wheat">
        <h2 className="text-2xl max-w-md md:ml-12">
          Get the exact market prices At your finger Tip:{" "}
          <span className="text-gray-700">Be the first to know </span>
        </h2>
      </section>
      <Image
        src="/images/wheat.svg"
        width={1440}
        height={1020}
        className="w-screen"
        alt="Closeup picture of wheat harvest. bowl of harvested wheat"
      />

      <div className="cards-wrapper container mx-auto flex justify-evenly flex-wrap gap-2 my-8 ">
        <Image
          src="/images/cereal-card.png"
          width={620}
          height={516}
          alt="Cereals"
          className="w-96"
        />
        <Image
          src="/images/machine-card.png"
          width={613}
          height={516}
          alt="Machines"
          className="w-96"
        />
      </div>
      <h2 className="text-2xl max-w-md md:ml-12 my-12">
        Stay Updated about the ravaging pest diseases and their seasons:{" "}
        <span className="text-gray-700">Beware and take caution too</span>
      </h2>

      <section className="tomato relative container mx-auto flex justify-around">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_70%,#000_110%)]"></div>
        <div className="info">
          <h3 className="text-2xl max-w-md my-4">
            Tomato Disease:{" "}
            <span className="text-gray-700">
              {" "}
              Early Blight (Alternaria solani)
            </span>
          </h3>

          <h4 className="font-bold text-xl my-2">Symptoms:</h4>

          <ol className="list-decimal ml-4">
            <li>Yellowing or chlorotic leaves</li>
            <li>Black or brown spots on lower leaves</li>
            <li>Lesions with concentric rings (target-like)</li>
            <li>Defoliation and reduced fruit production</li>
          </ol>

          <h4 className="font-bold text-xl my-2">Management:</h4>

          <ol className="list-decimal ml-4">
            <li>Crop rotation and sanitation</li>
            <li>Remove infected leaves and debris</li>
          </ol>

          <h4 className="font-bold text-xl my-2">Prevention:</h4>

          <ol className="list-decimal ml-4">
            <li>Use disease-free seeds</li>
            <li>Maintain soil health and fertility</li>
          </ol>
        </div>
        <div className="img-wrapper h-[30rem]">
          <Image
            src="/images/tomato.png"
            width={730}
            height={1131}
            alt="Closeup picture of Tomato"
            className="h-full w-full rounded-xl object-contain"
          />
        </div>
      </section>

      <hr className="my-3 h-3 bg-gray-300" />
      <section className="quote text-center bg-gray-300 p-2 text-gray-800 text-lg">
        {'"Insights today, increased yields tomorrow."'}
      </section>
      <hr className="my-3 h-3 bg-gray-300" />

      <footer className="p-6 bg-[#0E2604] flex flex-col justify-center items-center gap-4 text-white">
        <Image
          src="/images/logo-light.png"
          width={570}
          height={94}
          alt="logo"
          className="w-32"
        />
        <ul className="flex gap-4 text-sm text-gray-200">
          <li>
            <Link className="hover:underline" href="#">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Community
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Partners
            </Link>
          </li>
        </ul>
        <ul className="flex gap-3 items-center">
          <li>
            <Link className="hover:underline" href="#">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.753 1.659C16.8395 1.56011 16.9056 1.44516 16.9477 1.32071C16.9897 1.19626 17.0069 1.06475 16.9981 0.933678C16.9893 0.802608 16.9548 0.674551 16.8965 0.556816C16.8383 0.439081 16.7574 0.333975 16.6585 0.2475C16.5596 0.161024 16.4447 0.0948727 16.3202 0.0528216C16.1958 0.0107705 16.0642 -0.00635638 15.9332 0.00241876C15.8021 0.0111939 15.6741 0.0456994 15.5563 0.103965C15.4386 0.16223 15.3335 0.243115 15.247 0.342L10.137 6.182L5.8 0.4C5.70685 0.275804 5.58607 0.175 5.44721 0.105573C5.30836 0.036145 5.15525 0 5 0H1C0.814289 0 0.632245 0.0517147 0.474269 0.149349C0.316293 0.246984 0.188626 0.386681 0.105573 0.552786C0.0225203 0.718892 -0.0126368 0.904844 0.00404117 1.08981C0.0207191 1.27477 0.0885733 1.45143 0.2 1.6L6.637 10.182L1.247 16.342C1.16053 16.4409 1.09437 16.5558 1.05232 16.6803C1.01027 16.8047 0.993144 16.9363 1.00192 17.0673C1.01069 17.1984 1.0452 17.3264 1.10347 17.4442C1.16173 17.5619 1.24261 17.667 1.3415 17.7535C1.44039 17.84 1.55534 17.9061 1.67979 17.9482C1.80424 17.9902 1.93575 18.0074 2.06682 17.9986C2.19789 17.9898 2.32595 17.9553 2.44368 17.897C2.56142 17.8388 2.66652 17.7579 2.753 17.659L7.863 11.818L12.2 17.6C12.2931 17.7242 12.4139 17.825 12.5528 17.8944C12.6916 17.9639 12.8448 18 13 18H17C17.1857 18 17.3678 17.9483 17.5257 17.8507C17.6837 17.753 17.8114 17.6133 17.8944 17.4472C17.9775 17.2811 18.0126 17.0952 17.996 16.9102C17.9793 16.7252 17.9114 16.5486 17.8 16.4L11.363 7.818L16.753 1.659ZM13.5 16L3 2H4.5L15 16H13.5Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              <Youtube />
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5628 0L13.6033 0.0134375C13.6417 0.0432812 13.6728 0.0628125 13.7058 0.0775C14.0756 0.244688 14.4765 0.364375 14.8098 0.586563C15.7761 1.22875 16.7197 1.90547 17.6626 2.58188C18.1009 2.89547 18.5329 3.22203 18.937 3.57719C19.2373 3.84094 19.3722 4.21516 19.3729 4.61422L19.3722 17.1722C19.3717 17.3473 19.3417 17.5275 19.2929 17.6959C19.0714 18.4637 18.58 18.9892 17.8067 19.1944C17.3989 19.3023 16.9681 19.3359 16.5451 19.3708C15.8853 19.4256 15.2231 19.4525 14.562 19.4922L13.3114 19.5703L11.3089 19.6881L10.0778 19.765L8.05576 19.8822L7.01076 19.925C6.97717 19.9267 6.94607 19.9737 6.91435 20C6.11904 20 5.32435 20 4.52232 19.9872C4.48389 19.9567 4.45467 19.9322 4.42045 19.9225C3.93576 19.782 3.52935 19.5142 3.21685 19.1253C2.78404 18.5877 2.37279 18.0334 1.95654 17.483C1.44498 16.8066 0.920135 16.1402 0.436698 15.4444C0.152546 15.0378 0.000349817 14.5537 0.000760145 14.0577C-0.000602134 10.3488 -0.000133374 6.63984 0.0021664 2.93094C0.0021664 2.82406 0.0209164 2.71609 0.0393539 2.60984C0.233416 1.46797 1.07873 0.85875 2.08404 0.745781C2.60592 0.687187 3.13139 0.660937 3.65576 0.62625L5.0417 0.54625L5.63748 0.507187L7.43435 0.352187L8.43045 0.274062L10.0803 0.156875L11.4662 0.075C11.5 0.0726563 11.5311 0.02625 11.5628 0ZM3.70264 17.8022C3.78576 17.9102 3.87842 18.0127 3.95107 18.1275C4.30326 18.6786 4.8081 18.8787 5.44951 18.8361L9.79467 18.5773L14.6847 18.2819L17.1194 18.125C17.8409 18.067 18.1894 17.677 18.2034 16.9531V16.7969L18.2089 4.94328C18.2095 4.58625 18.0862 4.33656 17.8006 4.13703L14.3594 1.71203C13.8058 1.30922 13.2181 1.12125 12.5375 1.175L8.68373 1.46L4.6542 1.75719L2.12498 1.95438C1.61404 2.00125 1.29732 2.31375 1.20576 2.815C1.1835 2.94295 1.17267 3.07263 1.17342 3.2025L1.16295 13.5528C1.15935 14.2309 1.36685 14.795 1.77279 15.3138L3.70264 17.8022Z"
                  fill="white"
                />
                <path
                  d="M3.69357 17.7917L1.77279 15.3136C1.36685 14.7949 1.15935 14.231 1.16295 13.5528L1.17342 3.20252C1.17342 3.07314 1.18311 2.94189 1.20576 2.81502C1.29732 2.31392 1.61404 2.00142 2.12498 1.95439L4.6542 1.7572L8.68389 1.46002L12.5375 1.17502C13.2181 1.12127 13.8058 1.30924 14.3594 1.71205C15.494 2.53783 16.65 3.33439 17.8006 4.13705C18.0862 4.33658 18.2095 4.58627 18.2089 4.9433L18.2034 16.7975V16.9538C18.1894 17.677 17.8409 18.067 17.1194 18.125C16.3089 18.1903 15.4965 18.2325 14.6847 18.2819L9.79467 18.5772L5.44951 18.8361C4.8081 18.8788 4.30326 18.6786 3.95107 18.1275C3.87842 18.0127 3.78576 17.9102 3.69357 17.7917ZM4.69451 10.6055V15.838L4.69576 16.8139C4.7042 17.2516 4.91857 17.4695 5.35607 17.4945C5.46592 17.5006 5.57701 17.4969 5.68748 17.4902L9.35029 17.2742L16.3448 16.8744C16.7808 16.85 16.9822 16.6589 17.0229 16.2269C17.0309 16.1492 17.0284 16.0706 17.0284 15.9925L17.029 5.91799C17.029 5.85939 17.0309 5.8008 17.0273 5.7422C17.0011 5.34127 16.8289 5.17767 16.4304 5.19892L12.8256 5.40658C11.1371 5.50481 9.44869 5.60366 7.76029 5.70314L5.22795 5.85517C4.90514 5.8758 4.7592 6.01502 4.71045 6.33064C4.69891 6.41435 4.69379 6.49881 4.69514 6.5833L4.69451 10.6055ZM13.6276 2.36689C13.3219 2.20095 12.9898 2.14595 12.6479 2.16486C12.1225 2.19361 11.597 2.23689 11.0714 2.27486L3.57936 2.81924C3.35295 2.83564 3.12529 2.85205 2.90185 2.89252C2.82685 2.90595 2.73217 2.98158 2.70904 3.05002C2.69186 3.09814 2.76764 3.19533 2.8231 3.24845C2.92576 3.34658 3.04404 3.42892 3.15592 3.51752C3.42139 3.72689 3.70389 3.91783 3.94748 4.14924C4.40951 4.58799 4.94717 4.68939 5.56311 4.64486L10.4123 4.3408L15.6326 4.02767C15.6803 4.02533 15.7279 4.01064 15.8328 3.99111C15.737 3.89158 15.6814 3.81533 15.6089 3.76158C15.3531 3.5727 15.0949 3.38716 14.8344 3.20502C14.434 2.92294 14.0318 2.64355 13.6276 2.36689Z"
                  fill="black"
                />
                <path
                  d="M4.69453 10.5857L4.69515 6.58307C4.69515 6.4987 4.69765 6.41338 4.71046 6.33042C4.75921 6.01479 4.90515 5.87573 5.22796 5.85495L7.76031 5.70292L12.8256 5.40635L16.4303 5.1987C16.8289 5.17745 17.0011 5.34151 17.0272 5.74198C17.0309 5.80057 17.0291 5.85917 17.0291 5.91776L17.0284 15.9923L17.023 16.2267C16.9822 16.6587 16.7808 16.8498 16.3448 16.8742L9.35031 17.274L5.6875 17.4899L5.35625 17.4943C4.91859 17.4693 4.70421 17.2514 4.69578 16.8143L4.69453 15.8378V10.5857ZM11.8455 10.596L9.83484 7.53276C9.76468 7.42589 9.69578 7.39057 9.5664 7.40463L8.70937 7.46245L7.13281 7.57792C6.74531 7.61339 6.51093 7.97776 6.61828 8.35557L7.45328 8.42698V15.1915L6.88453 15.352C6.63234 15.4264 6.52437 15.6389 6.60921 15.9104L8.53234 15.7999L9.28984 15.7378C9.6164 15.684 9.79218 15.4839 9.83609 15.1573L8.78453 14.9174V9.82948L8.86265 9.93885L11.2795 13.7126C11.6348 14.2637 11.9996 14.8086 12.3739 15.347C12.6406 15.7298 13.0337 15.847 13.4756 15.7517C13.7522 15.6926 14.0177 15.5803 14.2886 15.4929C14.4297 15.4471 14.4778 15.3629 14.4772 15.2048L14.4725 8.25167C14.4725 7.84526 14.4725 7.84526 14.8745 7.76417C15.2811 7.68229 15.383 7.51995 15.2902 7.08542L12.8605 7.23307C12.5961 7.25198 12.3959 7.47292 12.3558 7.72995C12.3361 7.85385 12.3617 7.92214 12.51 7.93073L13.2456 8.01198V12.7274C12.7797 12.0167 12.313 11.3064 11.8455 10.5967V10.596ZM13.6409 2.37339C14.0398 2.64882 14.4375 2.92591 14.8341 3.20464C15.0947 3.38683 15.3529 3.57242 15.6087 3.76135C15.6812 3.8151 15.7369 3.89135 15.8327 3.99089L15.6325 4.02745L10.4122 4.34057L5.56296 4.64464C4.94703 4.68917 4.40937 4.58776 3.94734 4.14901C3.70375 3.91776 3.42125 3.72667 3.15562 3.51729C3.0439 3.4287 2.92562 3.34635 2.82296 3.24807C2.7675 3.19495 2.69171 3.09807 2.7089 3.04964C2.73203 2.98135 2.82734 2.90573 2.90171 2.89229C3.12515 2.85198 3.35281 2.83542 3.57921 2.81901L11.0714 2.27464L12.648 2.16464C12.9897 2.14589 13.3217 2.20057 13.6409 2.37339Z"
                  fill="white"
                />
                <path
                  d="M11.8539 10.6076L13.2456 12.7275V8.01186L12.5102 7.93061C12.3617 7.92217 12.3361 7.85389 12.3556 7.72998C12.3959 7.47295 12.5963 7.25201 12.8603 7.23311L15.2902 7.08545C15.383 7.51982 15.2811 7.68232 14.8745 7.76404C14.4724 7.84467 14.4724 7.84467 14.4724 8.2517L14.4772 15.2048C14.4778 15.3629 14.4297 15.4472 14.2886 15.4929L13.4756 15.7517C13.0338 15.8464 12.6406 15.7298 12.3741 15.347C12 14.8085 11.6351 14.2636 11.2797 13.7126L8.86251 9.93873C8.84548 9.91186 8.82595 9.88686 8.78439 9.82951V14.9175L9.8361 15.1573C9.7922 15.4839 9.61642 15.6839 9.28985 15.7378C9.04079 15.7786 8.78517 15.7847 8.53235 15.8L6.60923 15.9104C6.52439 15.6389 6.63235 15.4264 6.88454 15.352L7.45329 15.1915V8.42701L6.61829 8.35561C6.51095 7.97779 6.74532 7.61342 7.13282 7.57795C7.6572 7.52904 8.18392 7.4992 8.70939 7.46264C8.99501 7.44311 9.28189 7.43576 9.56642 7.40467C9.69579 7.39061 9.76485 7.42592 9.83485 7.53279L11.8539 10.6076Z"
                  fill="black"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default Homepage;
