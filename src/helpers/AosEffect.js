import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function AosEffect() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
}
