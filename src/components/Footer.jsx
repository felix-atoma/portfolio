import './footer.css';
import HomeData from './HomeData';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <h4>All rights reserved @ Felixo. | {year} | </h4>
      <div className="footer__socials">
        {HomeData.map(item => (
          <a href={item.link} key={item.id}>
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
