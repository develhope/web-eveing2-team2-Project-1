import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const footerSections = [
    {
      title: "Itinerari",
      items: [
        "Destinazioni",
        "Modo di viaggiare",
        "Tipo di vacanza",
        "Viaggia per stagione",
      ],
    },
    {
      title: "Supporto",
      items: [
        { text: "FAQ", link: "#" },
        { text: "Termini e condizioni", link: "#" },
        { text: "Privacy Policy", link: "#" },
        { text: "Assicurazione di viaggio", link: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
  ];

  const contactInfo = {
    email: "travelroutes@gmail.com",
    phone: "+39 333 48 77 951",
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="immagini/logo.png" alt="Logo" />
        </div>

        {footerSections.map((section, index) => (
          <div className="footer-section" key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, idx) =>
                typeof item === "string" ? (
                  <li key={idx}>{item}</li>
                ) : (
                  <li key={idx}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        <div className="footer-section">
          <h4>Contattaci</h4>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
          <div className="social-icons">
            {socialLinks.map((social, idx) => (
              <a href={social.link} key={idx}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TravelRoutes</p>
      </div>
    </footer>
  );
};

export default Footer;
