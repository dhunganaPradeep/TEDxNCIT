// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Speakers", url: "/speakers" },
  { name: "Team", url: "/teams" },
  { name: "Sponsors", url: "/sponsors" },
  { name: "FAQ's", url: "/contact#faq-section" },
  { name: "Contact", url: "/contact" },
  { name: "Insights", url: "/insights" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "TEDxNCIT",
    links: [
      { name: "NCIT", url: "https://ncit.edu.np/" },
      { name: "FAQ's", url: "/contact#faq-section" },
      { name: "Privacy Policy", url: "https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" },
    ],
  },
  {
    section: "Site Links",
    links: [
      { name: "About us", url: "/#about" },
      { name: "Sponsors", url: "/sponsors" },
      { name: "Insights", url: "/insights" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/tedxncit",
  instagram: "https://www.instagram.com/tedxncit/",
  linkedin: "https://www.linkedin.com/company/tedxncit/",
  github: "https://github.com/dhunganaPradeep",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};