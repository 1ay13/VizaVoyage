import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-blue-600 pt-[120px] md:pt-[130px] lg:pt-[160px] text-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-10">
          <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
            Your Trusted Immigration Consultants
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Helping individuals and families navigate their journey to a better future with expert immigration services.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-md hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-12 flex justify-center mb-10">
          <Image
            src="/images/hero/immigration-consultant.jpg"
            alt="Immigration Consultant"
            className="rounded-lg shadow-lg"
            width={1400}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
