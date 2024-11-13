import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamsPage() {
  const teamMembers = [
    {
      name: "Joshua",
      role: "Lead Developer",
      image: "/images/lead.jpg",
      description:
        "Joshua specializes in sustainable agriculture algorithms and leads our development team.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Amoke Donald",
      role: "Full Stack Engineer",
      image: "/images/fullstack.jpg",
      description:
        "Donald is an expert in building scalable applications for agricultural data processing.",
      github: "https://github.com/justuche224",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Designer",
      role: "UX/UI Designer",
      image: "/images/designer.jpg",
      description:
        "Designer creates intuitive interfaces for farmers and agricultural professionals.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Justin Ezema",
      role: "Full Stack Developer",
      description:
        "Justin is a skilled frontend designer with a talent for crafting visually engaging and user-friendly web interfaces.",
      github: "https://github.com/jxtng",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Great Ekwueme",
      role: "Frontend Developer",
      image: "/images/frontend.jpg",
      description:
        "Great is a frontend developer known for creating intuitive and responsive designs that enhance user experience across all devices.",
      github: "https://github.com/syntacticsugarboyy",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Primo Laxman",
      role: "Backend Developer",
      description:
        "Laxman is a backend developer specializing in building robust and scalable server-side applications that ensure smooth data processing and integration.",
      github: "https://github.com/",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px),_linear-gradient(200deg,transparent_50%,#0E2604_50%)] [background-size:16px_16px,100%]"></div>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">
            Meet Our Team
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            The brilliant minds behind our agricultural innovation platform
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="aspect-w-1 aspect-h-1 mb-6">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover object-top w-64 h-64 block mx-auto rounded-full"
                    />
                  ) : (
                    <UserCircle className="w-64 h-64 block mx-auto" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-green-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href={member.github}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href={member.linkedin}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href={member.twitter}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
    </div>
  );
}
