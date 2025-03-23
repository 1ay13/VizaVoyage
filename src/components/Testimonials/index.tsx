import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Keyur Patel",
    designation: "Permanent Resident",
    content:
      "The entire PR process was seamless! Their team guided me through every step, from documentation to submission. Highly recommend their services for smooth immigration.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Kishan Ramani",
    designation: "International Student",
    content:
      "They provided excellent support with my student visa and SOP review. Thanks to their expertise, I got my study permit without hassle. Great service!",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Pooja Shah",
    designation: "Work Permit Holder",
    content:
      "From LMIA assistance to my work permit application, they handled everything professionally. Their free consultation was very helpful in understanding my options.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          paragraph="See what our satisfied clients have to say about our expert immigration services. From PR and study permits to work visas and tax filing, we've helped hundreds achieve their goals in Canada."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;