import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Common Questions About Immigration Services"
          paragraph="Find answers to frequently asked questions about visas, permanent residency, work permits, and tax filing in Canada."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How can I apply for a Temporary Resident Visa (TRV)?"
              answer="To apply for a Temporary Resident Visa (TRV), you need to submit an online application via the IRCC portal, provide proof of financial support, a letter of invitation (if applicable), and demonstrate ties to your home country."
            />
            <SingleFaq
              question="What are the eligibility criteria for Permanent Residency (PR)?"
              answer="Eligibility for PR depends on various factors, including work experience, education, language proficiency (IELTS/CELPIP), and adaptability. Express Entry and Provincial Nominee Programs (PNP) are common pathways."
            />
            <SingleFaq
              question="How do I prepare my Statement of Purpose (SOP) for a Study Permit?"
              answer="Your SOP should clearly outline your educational background, future goals, reasons for choosing Canada, and how your studies align with your career. Our experts provide SOP review services to help strengthen your application."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Can I work in Canada as an international student?"
              answer="Yes, international students with a valid study permit can work up to 20 hours per week during semesters and full-time during scheduled breaks. Some programs also offer co-op or internship opportunities."
            />
            <SingleFaq
              question="Do I need to file taxes as a student or temporary worker?"
              answer="Yes, all residents in Canada, including international students and work permit holders, must file taxes annually. We offer tax filing assistance to ensure compliance with Canadian tax laws."
            />
            <SingleFaq
              question="How long does it take to process a work permit application?"
              answer="Processing times vary depending on the type of work permit and country of application. On average, it can take anywhere from 2 to 6 months. We help ensure accurate application submission to avoid delays."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;