import { ReactNode } from "react";

export type Product = {
  href: string | null;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  stack: string[];
  slug: string;
  content?: ReactNode;
};

export const featured_products: Product[] = [
  {
    href: null,
    title: "Flight Experience Sales Dashboard",
    description:
      "Administrative dashboard for managing the sale of flight simulation experiences, creating and configuring experiences, handling customer orders, managing bookings through a calendar system, and controlling discount coupons to optimize sales and availability.",
    thumbnail: "/images/flight-orders.png",
    images: [
      "/images/flight-orders.png",
      "/images/flight-calendar.png",
      "/images/flight-experiences.png",
      "/images/flight-add-experiences.png",
      "/images/flight-add-booking.png",
    ],
    stack: ["Reactjs", "Vite", "Tailwindcss", "ShadcnUI"],
    slug: "flight-experience-dashboard",
  },
  // {
  //   href: null,
  //   title: "MedDent",
  //   description: "E-learning web site for medical courses.",
  //   thumbnail: "/images/meddent-home.png",
  //   images: [
  //     "/images/meddent-home.png",
  //     "/images/meddent-home1.png",
  //     "/images/meddent-home2.png",
  //     "/images/meddent-courses.png",
  //     "/images/meddent-courses1.png",
  //     "/images/meddent-overview.png",
  //   ],
  //   stack: [
  //     "Nextjs",
  //     "Tailwindcss",
  //     "shadcnUI",
  //     "Nodejs",
  //     "Nestjs",
  //     "Postgresql",
  //   ],
  //   slug: "meddent",
  //   content: (
  //     <div>
  //       <p>
  //         An e-learning platform offering comprehensive courses in medical
  //         sciences, including medicine, pharmacy, and dentistry. Designed to
  //         provide expert-led training and resources for aspiring and current
  //         healthcare professionals to advance their careers in the medical
  //         field.
  //       </p>
  //       <p>
  //         The website also offers convenient online payment options for courses,
  //         allowing students to easily enroll and access course materials,
  //         including video lectures and other learning resources, from anywhere
  //         at any time,the platform supports multiple languages, with content
  //         available in both French and English to cater to a diverse audience.
  //       </p>
  //     </div>
  //   ),
  // },
  // {
  //   href: "https://stormtechdz.com",
  //   title: "Storm Tech",
  //   description: "E-commerce website for computer tools .",
  //   thumbnail: "/images/sidefolio-stormtech.png",
  //   images: [
  //     "/images/sidefolio-stormtech.png",
  //     "/images/stormtech2.png",
  //     "/images/stormtech3.png",
  //   ],
  //   stack: ["Nextjs", "Tailwindcss", "ShadcnUI"],
  //   slug: "stormtech",
  //   content: (
  //     <div>
  //       <p>
  //         An e-commerce website specializing in electronic devices, including
  //         computers, hard drives, and other tech products. Offering a wide range
  //         of high-quality electronics, the platform provides customers with easy
  //         and secure online payment options for a smooth shopping experience
  //       </p>
  //       <p>
  //         They offer a wide range of products, including laptops, graphics
  //         cards, memory modules, SSDs, and cooling systems.They also provide
  //         customer support and easy navigation through categories such as flash
  //         sales and featured brands.
  //       </p>{" "}
  //       <p>
  //         Storm Tech DZ&apos;s website is developed using Next.js and ShadCN,
  //         ensuring a fast, efficient, and modern user experience. The website is
  //         multilingual, supporting Arabic (AR), English (EN), and French (FR).
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  {
    href: null,
    title: "Ordolib Dashboard",
    description:
      "Pharmacy dashboard to process orders received from customers and then delivered to drivers",
    thumbnail: "/images/ordolib-new-commands.png",
    images: [
      "/images/ordolib-new-commands-grid.png",
      "/images/ordolib-personal.png",
      "/images/ordolib-roles.png",
      "/images/ordolib-add-member.png",
      "/images/ordolib-collections.png",
      "/images/ordolib-notifications.png",
      "/images/ordolib-hours.png",
      "/images/ordolib-settings.png",
      "/images/ordolib-settings-2.png",
      "/images/ordolib-settings-3.png",
    ],
    stack: ["Reactjs", "Vite", "Tailwindcss", "ShadcnUI"],
    slug: "ordolib",
    // content: null,
  },
  {
    href: null,
    title: "Saturnepro",
    description: "Landing page describes licensed taxis for medical services",
    thumbnail: "/images/hero-section.png",
    images: [
      "/images/functionnalities-section.png",
      "/images/folders-section.png",
      "/images/integrations-section.png",
      "/images/offers-section.png",
      "/images/footer-section.png",
    ],
    stack: ["Nextjs", "Tailwindcss", "ShadcnUI"],
    slug: "saturnepro",
    // content: null,
  },
];

export const all_products: Product[] = [
  {
    href: null,
    title: "MedDent",
    description: "E-learning web site for medical courses.",
    thumbnail: "/images/meddent-home.png",
    images: [
      "/images/meddent-home.png",
      "/images/meddent-home1.png",
      "/images/meddent-home2.png",
      "/images/meddent-courses.png",
      "/images/meddent-courses1.png",
      "/images/meddent-overview.png",
    ],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "shadcnUI",
      "Nodejs",
      "Nestjs",
      "Postgresql",
    ],
    slug: "meddent",
    content: (
      <div>
        <p>
          An e-learning platform offering comprehensive courses in medical
          sciences, including medicine, pharmacy, and dentistry. Designed to
          provide expert-led training and resources for aspiring and current
          healthcare professionals to advance their careers in the medical
          field.
        </p>
        <p>
          The website also offers convenient online payment options for courses,
          allowing students to easily enroll and access course materials,
          including video lectures and other learning resources, from anywhere
          at any time,the platform supports multiple languages, with content
          available in both French and English to cater to a diverse audience.
        </p>
      </div>
    ),
  },
  {
    href: null,
    title: "Ordolib Dashboard",
    description:
      "Pharmacy dashboard to process orders received from customers and then delivered to drivers",
    thumbnail: "/images/ordolib-new-commands.png",
    images: [
      "/images/ordolib-new-commands-grid.png",
      "/images/ordolib-personal.png",
      "/images/ordolib-roles.png",
      "/images/ordolib-add-member.png",
      "/images/ordolib-collections.png",
      "/images/ordolib-notifications.png",
      "/images/ordolib-hours.png",
      "/images/ordolib-settings.png",
      "/images/ordolib-settings-2.png",
      "/images/ordolib-settings-3.png",
    ],
    stack: ["Reactjs", "Vite", "Tailwindcss", "ShadcnUI"],
    slug: "ordolib",
    // content: null,
  },
  {
    href: null,
    title: "Flight Experience Sales Dashboard",
    description:
      "Administrative dashboard for managing the sale of flight simulation experiences, creating and configuring experiences, handling customer orders, managing bookings through a calendar system, and controlling discount coupons to optimize sales and availability.",
    thumbnail: "/images/flight-orders.png",
    images: [
      "/images/flight-orders.png",
      "/images/flight-calendar.png",
      "/images/flight-experiences.png",
      "/images/flight-add-experiences.png",
      "/images/flight-add-booking.png",
    ],
    stack: ["Reactjs", "Vite", "Tailwindcss", "ShadcnUI"],
    slug: "flight-experience-dashboard",
  },
  {
    href: "https://convostream.netlify.app/",
    title: "Convo Stream",
    description: "Chat and Share posts application.",
    thumbnail: "/images/convostream4.png",
    images: [
      "/images/convostream4.png",
      "/images/convostream3.png",
      "/images/convostream-chat3.png",
    ],
    stack: ["Nextjs", "Tailwindcss", "ShadcnUI", "Nodejs", "Nestjs", "Mongodb"],
    slug: "convostream",
    content: (
      <div>
        <p>
          A dynamic platform for sharing posts and connecting with others. Users
          can create and share content, engage in discussions, and stay updated
          with the latest posts. The website also features a system of likes and
          comments, allowing users to interact with content, and includes an
          integrated chat application for real-time communication with the
          community.
        </p>
      </div>
    ),
  },
  {
    href: "https://stormtechdz.com",
    title: "Storm Tech",
    description: "E-commerce website for computer tools .",
    thumbnail: "/images/sidefolio-stormtech.png",
    images: [
      "/images/sidefolio-stormtech.png",
      "/images/stormtech2.png",
      "/images/stormtech3.png",
    ],
    stack: ["Nextjs", "Tailwindcss", "ShadcnUI"],
    slug: "stormtech",
    content: (
      <div>
        <p>
          An e-commerce website specializing in electronic devices, including
          computers, hard drives, and other tech products. Offering a wide range
          of high-quality electronics, the platform provides customers with easy
          and secure online payment options for a smooth shopping experience
        </p>
        <p>
          They offer a wide range of products, including laptops, graphics
          cards, memory modules, SSDs, and cooling systems.They also provide
          customer support and easy navigation through categories such as flash
          sales and featured brands.
        </p>{" "}
        <p>
          Storm Tech DZ&apos;s website is developed using Next.js and ShadCN,
          ensuring a fast, efficient, and modern user experience. The website is
          multilingual, supporting Arabic (AR), English (EN), and French (FR).
        </p>{" "}
      </div>
    ),
  },
  {
    href: null,
    title: "Saturnepro",
    description: "Landing page describes licensed taxis for medical services",
    thumbnail: "/images/hero-section.png",
    images: [
      "/images/functionnalities-section.png",
      "/images/folders-section.png",
      "/images/integrations-section.png",
      "/images/offers-section.png",
      "/images/footer-section.png",
    ],
    stack: ["Nextjs", "Tailwindcss", "ShadcnUI"],
    slug: "saturnepro",
    // content: null,
  },
  {
    href: null,
    title: "HR Management Dashboard",
    description:
      "Human resources management system designed to manage employees, calculate payroll, generate and print salary slips in PDF format, handle employee contracts, and centralize all HR-related operations in one secure dashboard.",
    thumbnail: "/images/hr-personals.png",
    images: [
      "/images/hr-overview.png",
      "/images/hr-settings.png",
      "/images/hr-add-leave-abs.png",
      "/images/hr-personals.png",
    ],
    stack: ["Reactjs", "Vite", "Mui"],
    slug: "hr-management",
  },
];
