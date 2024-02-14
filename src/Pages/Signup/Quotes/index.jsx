import { Grid, Typography } from "@mui/material";
import { QuotesStyles } from "./styles";
import Js from "../../../assets/images/jsSignup.png";
import BootstrapImg from "../../../assets/images/bs.png";
import Python from "../../../assets/images/pythonQuoteImg.png";
import Css from "../../../assets/images/css.png";
import Html from "../../../assets/images/htm.png";
import Rc from "../../../assets/images/raectQuoteImg.png";
import Javas from "../../../assets/images/javas.png";
import Mysql from "../../../assets/images/mysql.png";
import { useEffect, useState } from "react";
import { quotes } from "./quotesData";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function FormQuotes({ secondRowColor }) {
  const [randomText, setRandomText] = useState(quotes[0]);

  const randomGenerate = () => {
    setInterval(() => {
      let random = Math.floor(Math.random() * quotes.length);
      setRandomText(quotes[random]);
    }, 6000);
  };
  useEffect(() => {
    randomGenerate();
  }, []);
  return (
    <QuotesStyles secondRowColor={secondRowColor}>
      <Grid className="main-grid" container>
        <Grid container className="bootstrap-img">
          <Grid item>
            <img src={BootstrapImg} height={35} width={45} />
          </Grid>
        </Grid>
        <Grid container className="js-img">
          <Grid item>
            <img src={Js} height={40} width={40} />
          </Grid>
        </Grid>
        <Grid container className="python-img">
          <Grid item>
            <img src={Python} height={60} width={51} />
          </Grid>
          <div className="text-field">
            {randomText?.innerText.map(({ text, classCss, variant }, index) => {
              return (
                <Typography className={classCss} variant={variant} key={index}>
                  {text}
                </Typography>
              );
            })}
            <div>
              <p className={randomText?.author?.classCss}>
                {randomText?.author?.name}
              </p>
            </div>
          </div>
          <Grid container className="mysql-img">
            <Grid item>
              <img src={Mysql} height={60} width={60} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="css-img">
          <Grid item>
            <img src={Css} height={39} width={39} />
          </Grid>
        </Grid>
        <Grid container className="html-img">
          <Grid item lg={1.2}>
            <img src={Html} height={35} width={35} />
          </Grid>
        </Grid>
        <Grid container className="react-img">
          <Grid item lg={1.2}>
            <img src={Rc} height={40} width={45} />
          </Grid>
          <Grid item className="typo">
            <Typography variant="body2" component="div">
              Base2geeks <br /> logo
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="javas-img">
          <Grid item lg={1.2}>
            <img src={Javas} height={40} width={40} />
          </Grid>
        </Grid>
      </Grid>
    </QuotesStyles>
  );
}
