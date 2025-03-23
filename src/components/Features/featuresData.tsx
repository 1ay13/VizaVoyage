import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 2C15.43 2 2 15.43 2 32s13.43 30 30 30 30-13.43 30-30S48.57 2 32 2zm0 54C18.2 56 6 43.8 6 30h8c0 10.7 8.3 19 18 19s18-8.3 18-18H6V20h36v10c0 10.7-8.3 19-18 19z"
          fill="white"
        />
      </svg>
    ),
    title: "Temporary Resident Visa (TRV)",
    paragraph: "Assistance with visitor visas, work permits, and short-term stays in Canada.",
    btn: "Learn More",
    btnLink: "/#trv",
  },
  {
    id: 2,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm0 56C17.664 58 6 46.336 6 32S17.664 6 32 6s26 11.664 26 26-11.664 26-26 26z"
          fill="white"
        />
      </svg>
    ),
    title: "Permanent Residency (PR)",
    paragraph: "Comprehensive guidance for Express Entry, PNP, family sponsorship, and PR pathways.",
    btn: "Learn More",
    btnLink: "/#pr",
  },
  {
    id: 3,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2h40a2 2 0 012 2v40a2 2 0 01-2 2H12a2 2 0 01-2-2V4a2 2 0 012-2zm38 40V6H14v36h36zM4 50a2 2 0 012-2h48a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"
          fill="white"
        />
      </svg>
    ),
    title: "Student Starter Kit",
    paragraph: "Get everything you need for a smooth transition to student life in Canada.",
    btn: "Learn More",
    btnLink: "/#student-kit",
  },
  {
    id: 4,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm0 56C17.664 58 6 46.336 6 32S17.664 6 32 6s26 11.664 26 26-11.664 26-26 26zM22 18h20v6H22v-6zm0 12h20v6H22v-6zm0 12h20v6H22v-6z"
          fill="white"
        />
      </svg>
    ),
    title: "Tax Filing Assistance",
    paragraph: "Hassle-free tax filing for students, workers, and new immigrants in Canada.",
    btn: "Learn More",
    btnLink: "/#tax-filing",
  },
];

export default featuresData;