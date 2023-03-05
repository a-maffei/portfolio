import { ReactComponent as Dog } from "./img/ale-elio-portfolio.svg";
import { useEffect } from "react";

function Alelio() {
  useEffect(() => {
    const tailUp = document.getElementById("tailup");
    const animation = tailUp.animate(
      [
        { transform: "translatey(-5%)" },
        { transform: "translatey(-10%)" },
        { transform: "translatey(-5%)" },
        { transform: "translatey(-0%)" },
        /*  { transform: "translatey(-9%)" },
                { transform: "translatey(0)" }, */
        /*  { transform: "rotate(2deg) },
                { transform: "rotate(0deg)" }, */
      ],
      {
        duration: 700,
        iterations: Infinity,
      }
    );

    const tailDown1 = document.getElementById("taildown1");

    const animation2 = tailDown1.animate(
      [
        { transform: "translatey(-5%)" },
        { transform: "translatey(-10%)" },
        { transform: "translatey(-5%)" },
        { transform: "translatey(-0%)" },
        /*  { transform: "translatey(-9%)" },
                { transform: "translatey(0)" }, */
        /*  { transform: "rotate(2deg) },
                { transform: "rotate(0deg)" }, */
      ],
      {
        duration: 700,
        iterations: Infinity,
      }
    );

    const tailDown2 = document.getElementById("taildown2");

    const animation3 = tailDown2.animate(
      [
        { transform: "translatey(-5%)" },
        { transform: "translatey(-10%)" },
        { transform: "translatey(-5%)" },
        { transform: "translatey(-0%)" },
        /*  { transform: "translatey(-9%)" },
            { transform: "translatey(0)" }, */
        /*  { transform: "rotate(2deg) },
            { transform: "rotate(0deg)" }, */
      ],
      {
        duration: 700,
        iterations: Infinity,
      }
    );

    return () => {
      animation.cancel();
      animation2.cancel();
      animation3.cancel();
    };
  }, []);

  return <Dog />;
}

export default Alelio;
