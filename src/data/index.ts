type DataType = {
  navbar: { title: string; icon: string; href: string }[];
  favorites: { title: string; description?: string; image: string }[];
};

const data: DataType = {
  navbar: [
    { title: "dashboard", icon: "dashboard", href: "/#" },
    {
      title: "available units",
      icon: "available-units",
      href: "/available-units",
    },
    {
      title: "invoices",
      icon: "invoices",
      href: "/#",
    },
    {
      title: "projects",
      icon: "projects",
      href: "/projects",
    },
    {
      title: "social media",
      icon: "social-media",
      href: "/#",
    },
    {
      title: "integrations",
      icon: "integrations",
      href: "/#",
    },
    {
      title: "documentation",
      icon: "documentation",
      href: "/#",
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
      image: "https://s3-alpha-sig.figma.com/img/02fb/2790/e5728e588d8aba4a02f99d8d234cdb01?Expires=1704067200&Signature=M0r~ayMAQJH5YhEhdLuCfmQPDPY6c0ylbf3g7VwGSnAn4E7fp2RAxNYPuB2yZNvVlUSi9lSD1J40L6IQ5wpJ5YjM1ejk4u3uOoPROKfv6yBZreHS-EochxEwVe9ivhYPy4irhqIynIOHqEjPZKMcf-fN7XZi1JnjdeoPq5uc1bL2BYH9HmoVfL1II92hsm7MJUQSK4kaVyPQdjMC3zThO72Rvis5J5PXaAeWofFCSritYlw7sx1kWd7I7wSLNeLMEOJICALy6pDpxXcUhtZ~ZfSB0oSKaPURnUeTwQUOW02oKijIGzEecUG~wn-0mhwKTCYtxx36tXb9ZbazdvQiDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

    },
  ],
};

export default data;
