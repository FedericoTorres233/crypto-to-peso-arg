import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.all}>
      <h1 className={classes.h1}>Hello! My Name is Federico</h1>
      <h3 className={classes.h3}>
        This webapp is something I did in my free time to practice how to code.
        If you have any questions, don't hesitate to{" "}
        <a className={classes.a} href="/">
          email me 📩
        </a>
        <h4 className={classes.h4}>
          <a className={classes.a} href="https://github.com/FedericoTorres233/crypto-to-peso-arg">
            Source Code
          </a>
        </h4>
        <h4 className={classes.h4}>
          <a className={classes.a} href="https://github.com/FedericoTorres233">
            Follow me on{" "}
            <img
              className={classes.a.img}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            ></img>
            {" :)"}
          </a>
        </h4>
      </h3>
    </div>
  );
}

export default About;
