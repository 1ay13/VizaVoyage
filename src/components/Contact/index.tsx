import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-[130px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="contact-content-wrapper">
              <div className="contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[320px] text-4xl font-semibold leading-[1.14] text-dark dark:text-white sm:text-[40px]">
                  Let'ssss discuss how we can help you.
                </h2>
              </div>

              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                {/* Location Info */}
                <div className="mb-8 flex w-[350px] max-w-full">
                  <div className="mr-6 text-[34px] text-primary">
                    📍
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Our Location
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      61, Mistywood Dr, Stoney Creek, ON, Canada
                    </p>
                  </div>
                </div>

                {/* Email Info */}
                <div className="mb-8 flex w-[350px] max-w-full">
                  <div className="mr-6 text-[34px] text-primary">
                    📧
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Email Us
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@voyagevisa.com
                    </p>
                    <p className="mt-1 text-base text-body-color dark:text-dark-6">
                      contact@voyagevisa.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-lg dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px]">
                Send us a Message
              </h3>

              <form>
                <div className="mb-6">
                  <label
                    htmlFor="fullName"
                    className="mb-3 block text-sm font-medium text-dark dark:text-dark-6"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-dark-3 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-dark-6"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-dark-3 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-sm font-medium text-dark dark:text-dark-6"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 234 567 890"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-dark-3 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-dark dark:text-dark-6"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;