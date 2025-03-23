import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo & About Section */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="logo"
                  width={340}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-gray-7">
                We specialize in immigration, helping clients with PR, study permits, work visas, tax filing, and more. 
                Get expert guidance for your Canadian journey today!
              </p>
              <div className="-mx-3 flex items-center">
                {/* Social Media Links */}
                <Link
                  aria-label="Facebook"
                  href="#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </Link>
                <Link
                  aria-label="Instagram"
                  href="#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href="#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </Link>
                <Link
                  aria-label="WhatsApp"
                  href="#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
              <ul>
                <li>
                  <Link href="/" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-6 text-lg font-semibold text-white">Our Services</h4>
              <ul>
                <li>
                  <Link href="/services/pr" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    Permanent Residency (PR)
                  </Link>
                </li>
                <li>
                  <Link href="/services/study-permit" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    Study Permit
                  </Link>
                </li>
                <li>
                  <Link href="/services/work-permit" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    Work Permit
                  </Link>
                </li>
                <li>
                  <Link href="/services/tax-filing" className="mb-3 block text-base text-gray-7 hover:text-primary">
                    Tax Filing Assistance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-6 text-lg font-semibold text-white">Contact Info</h4>
              <ul>
                <li className="mb-3 text-base text-gray-7">
                  📍 Location: 123 Immigration St, Toronto, ON, Canada
                </li>
                <li className="mb-3 text-base text-gray-7">
                  📧 Email: <Link href="mailto:info@example.com" className="hover:text-primary">info@voyagevisa.com</Link>
                </li>
                <li className="mb-3 text-base text-gray-7">
                  📞 Phone: <Link href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</Link>
                </li>
                <li className="mb-3 text-base text-gray-7">
                  🕒 Working Hours: Mon-Fri, 9 AM - 6 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <Link href="/privacy-policy" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                    Terms of Service
                  </Link>
                  <Link href="/refund-policy" className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                    Refund Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-gray-7">
                  © {new Date().getFullYear()} Voyage Visa Immigration. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;