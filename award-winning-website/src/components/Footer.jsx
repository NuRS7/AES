import {FaDiscord, FaYoutube, FaWhatsapp} from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://wa.me/77471424003\n", icon: <FaWhatsapp /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div id="contacts" className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-times md:text-left">
          &copy; IKTU-Engineering 2025 && Energy Encyclopedia
        </p>

        <div className="flex justify-center gap-4  md:justify-start ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-amber-950"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="src/privacy-policy.html"
          className="text-center text-sm font-times hover:underline md:text-right"
        >
          Құпиялылық саясат
        </a>
      </div>
    </footer>
  );
};

export default Footer;
