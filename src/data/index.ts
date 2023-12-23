type DataType = {
  navbar: { title: string; icon: string; href: string }[];
  favorites: { title: string; description?: string; image: string }[];
  projects: {
    name: string;
    status: { name: string; color: string };
    brand: { name: string; logo: string };
    contributors: string[];
    type: {
      name: string;
      bgColor: string;
      textColor: string;
    };
    dueDate: string;
  }[];
};

export const brands = {
  Apple: { name: "Apple", logo: "apple" },
  Tesla: { name: "Tesla", logo: "tesla" },
  Nike_Athletic: { name: "Nike Athletic", logo: "nike" },
  Sony: { name: "Sony", logo: "sony" },
} as const;

const projectStatues = {
  InProgress: { name: "In Progress", color: "bg-blue-500" },
  Approved: { name: "Approved", color: "bg-green-500" },
  cancelled: { name: "Cancelled", color: "bg-red-500" },
  inReview: { name: "In review", color: "bg-yellow-500" },
};

const projectsTypes = {
  NEW_BUILD: {
    name: "New build",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  Reconstruction: {
    name: "Reconstruction",
    bgColor: "bg-[#FFE8D7]",
    textColor: "text-[#931222]",
  },
  Commercial: {
    name: "Commercial",
    bgColor: "bg-[#FFF9CF]",
    textColor: "text-[#7B5C03]",
  },
  Residential: {
    name: "Residential",
    bgColor: "bg-[#D8D8FE]",
    textColor: "text-[#181894]",
  },
};

const data: DataType = {
  navbar: [
    { title: "dashboard", icon: "dashboard", href: "/" },
    {
      title: "available units",
      icon: "available-units",
      href: "/available-units",
    },
    {
      title: "invoices",
      icon: "invoices",
      href: "/",
    },
    {
      title: "projects",
      icon: "projects",
      href: "/projects",
    },
    {
      title: "social media",
      icon: "social-media",
      href: "/",
    },
    {
      title: "integrations",
      icon: "integrations",
      href: "/",
    },
    {
      title: "documentation",
      icon: "documentation",
      href: "/",
    },
  ],
  favorites: [
    {
      title: "Boston family home",
      image: "https://shorturl.at/cRWZ6",
    },
    {
      title: "Miami beach house",
      image: "https://shorturl.at/dehKP",
    },
    {
      title: "New York Townhouse",
      image: "https://shorturl.at/sABMY",
    },
    {
      title: "Beachfront Mansion Miami",
      image: "https://shorturl.at/qwyIV",
    },
    {
      title: "Hamptons Villa",
      image: "https://shorturl.at/afiI6",
    },
    {
      title: "San Fransisco Condo",
      image:
        "https://s3-alpha-sig.figma.com/img/02fb/2790/e5728e588d8aba4a02f99d8d234cdb01?Expires=1704067200&Signature=M0r~ayMAQJH5YhEhdLuCfmQPDPY6c0ylbf3g7VwGSnAn4E7fp2RAxNYPuB2yZNvVlUSi9lSD1J40L6IQ5wpJ5YjM1ejk4u3uOoPROKfv6yBZreHS-EochxEwVe9ivhYPy4irhqIynIOHqEjPZKMcf-fN7XZi1JnjdeoPq5uc1bL2BYH9HmoVfL1II92hsm7MJUQSK4kaVyPQdjMC3zThO72Rvis5J5PXaAeWofFCSritYlw7sx1kWd7I7wSLNeLMEOJICALy6pDpxXcUhtZ~ZfSB0oSKaPURnUeTwQUOW02oKijIGzEecUG~wn-0mhwKTCYtxx36tXb9ZbazdvQiDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ],
  projects: [
    {
      name: "Miami development",
      status: projectStatues.cancelled,
      brand: brands.Tesla,
      contributors: ["https://shorturl.at/ilM19", "https://shorturl.at/jpAO9"],
      type: projectsTypes.NEW_BUILD,
      dueDate: "Thu 12 Dec",
    },
    {
      name: "Prague apartment",
      status: projectStatues.inReview,
      brand: brands.Nike_Athletic,
      contributors: ["https://shorturl.at/ilM19", "https://shorturl.at/jpAO9"],
      type: projectsTypes.Reconstruction,
      dueDate: "Thu 12 Dec",
    },
    {
      name: "Czech redevelopment",
      status: projectStatues.InProgress,
      brand: brands.Sony,
      contributors: ["https://shorturl.at/ilM19", "https://shorturl.at/jpAO9"],
      type: projectsTypes.Commercial,
      dueDate: "Wed 04 Dec",
    },
    {
      name: "Paris apartment blocks",
      status: projectStatues.InProgress,
      brand: brands.Apple,
      contributors: [
        "https://shorturl.at/ilM19",
        "https://shorturl.at/jpAO9",
        "https://shorturl.at/lAO01",
      ],
      type: projectsTypes.Residential,
      dueDate: "Tue 03 Dec",
    },
    {
      name: "India corporate property",
      status: projectStatues.inReview,
      brand: brands.Apple,
      contributors: [
        "https://shorturl.at/ilM19",
        "https://shorturl.at/jpAO9",
        "https://shorturl.at/lAO01",
      ],
      type: projectsTypes.Commercial,
      dueDate: "Mon 15 Jan",
    },
    {
      name: "New Delhi commercial",
      status: projectStatues.inReview,
      brand: brands.Nike_Athletic,
      contributors: [
        "https://shorturl.at/ilM19",
        "https://shorturl.at/jpAO9",
        "https://shorturl.at/lAO01",
      ],
      type: projectsTypes.Commercial,
      dueDate: "Thu 21 Oct",
    },
    {
      name: "Miami development",
      status: projectStatues.cancelled,
      brand: brands.Tesla,
      contributors: ["https://shorturl.at/ilM19", "https://shorturl.at/jpAO9"],
      type: projectsTypes.NEW_BUILD,
      dueDate: "Thu 12 Dec",
    },
    {
      name: "Prague apartment",
      status: projectStatues.inReview,
      brand: brands.Nike_Athletic,
      contributors: ["https://shorturl.at/ilM19", "https://shorturl.at/jpAO9"],
      type: projectsTypes.Reconstruction,
      dueDate: "Thu 12 Dec",
    },
    {
      name: "Czech redevelopment",
      status: projectStatues.InProgress,
      brand: brands.Sony,
      contributors: ["https://shorturl.at/ilM19", "https://shorturl.at/jpAO9"],
      type: projectsTypes.Commercial,
      dueDate: "Wed 04 Dec",
    },
    {
      name: "Paris apartment blocks",
      status: projectStatues.InProgress,
      brand: brands.Apple,
      contributors: [
        "https://shorturl.at/ilM19",
        "https://shorturl.at/jpAO9",
        "https://shorturl.at/lAO01",
      ],
      type: projectsTypes.Residential,
      dueDate: "Tue 03 Dec",
    },
    {
      name: "India corporate property",
      status: projectStatues.inReview,
      brand: brands.Apple,
      contributors: [
        "https://shorturl.at/ilM19",
        "https://shorturl.at/jpAO9",
        "https://shorturl.at/lAO01",
      ],
      type: projectsTypes.Commercial,
      dueDate: "Mon 15 Jan",
    },
    {
      name: "New Delhi commercial",
      status: projectStatues.inReview,
      brand: brands.Nike_Athletic,
      contributors: [
        "https://shorturl.at/ilM19",
        "https://shorturl.at/jpAO9",
        "https://shorturl.at/lAO01",
      ],
      type: projectsTypes.Commercial,
      dueDate: "Thu 21 Oct",
    },
  ],
};

export default data;
