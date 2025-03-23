"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="">
          <SectionTitle
            subtitle="Pricing Plans"
            title="Affordable Immigration Services"
            paragraph="Explore our flexible pricing options for immigration services, including TRV, PR applications, student starter kits, and tax filing. Get expert assistance at competitive rates. 
            
            Plus, enjoy **free consultation**, SOP reviews, and guidance on documentation to make your journey hassle-free."
            center
          />
        </div>

        {/* <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((service, i) => (
            <PricingBox key={i} product={service} />
          ))}     
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;