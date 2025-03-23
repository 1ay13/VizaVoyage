import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-12 pt-24 dark:bg-dark-2 lg:pb-[100px] lg:pt-[140px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-16 max-w-[600px] lg:mb-0">
                <h2 className="mb-6 text-4xl font-bold leading-tight text-dark dark:text-white sm:text-[45px] sm:leading-[1.2]">
                  Your Trusted Partner for Immigration & Student Services
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-dark-6">
                  With 10+ years of experience, we specialize in helping students and professionals 
                  navigate Canada's immigration process with ease. From getting a visa to 
                  settling down in Canada, we handle everything to ensure a smooth transition.
                  <br /> <br />
                  Whether you are applying for a Study Permit, Work Permit, PR, or seeking tax & settlement support, 
                  we provide expert guidance every step of the way.
                </p>

                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-6 sm:mb-10 sm:h-[450px] md:h-[580px] lg:h-[450px] xl:h-[550px]">
                    <Image
                      src="/images/about/about-image-01.jpg"
                      alt="Immigration services image"
                      fill
                      className="h-full w-full object-cover object-center rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-6 sm:mb-10 sm:h-[260px] md:h-[370px] lg:mb-6 lg:h-[280px] xl:mb-10 xl:h-[360px]">
                    <Image
                      src="/images/about/about-image-02.jpg"
                      alt="Immigration consultant assisting client"
                      fill
                      className="h-full w-full object-cover object-center rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="relative z-10 mb-6 flex items-center justify-center overflow-hidden bg-primary px-8 py-14 sm:mb-10 sm:h-[180px] sm:p-7 lg:mb-6 xl:mb-10">
                    <div>
                      <span className="block text-6xl font-extrabold text-white">
                        10+
                      </span>
                      <span className="block text-lg font-semibold text-white">
                        Years of Experience
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Helping students & professionals settle in Canada
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-dark dark:text-white sm:text-[38px]">
              Why Choose Us?
            </h3>
            <p className="mx-auto mt-4 max-w-[800px] text-lg text-body-color dark:text-dark-6">
              Our team provides end-to-end support to make your journey to Canada stress-free.
              From securing visas to ensuring a smooth settlement, we cover all aspects of immigration & student services.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2">
                <h4 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                  Complete Visa Assistance
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  We handle Study Permits, Work Permits, PR applications, Visitor & Spouse Visas, ensuring success with expert guidance.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2">
                <h4 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                  Post-Landing & Settlement Support
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  From finding accommodation to SIN registration & tax filing, we ensure you settle in Canada with ease.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2">
                <h4 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                  Student & Career Guidance
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  We help students choose the right colleges, courses, and career paths while maximizing immigration benefits.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2">
                <h4 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                  Tax Filing & Financial Planning
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  We assist with tax filing, CRA registration, and financial planning to keep you compliant and stress-free.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2">
                <h4 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                  Fast & Transparent Process
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  We offer timely application processing with 100% transparency and no hidden fees.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2">
                <h4 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                  Personalized Support
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  Every client is unique – we provide tailored solutions to meet your specific needs.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-white duration-300 hover:bg-primary/90"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;