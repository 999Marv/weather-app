import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <h3>
        Api from{" "}
        <a className={classes.a} href="https://openweathermap.org/">
          Open Weather
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
