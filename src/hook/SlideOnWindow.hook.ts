import { useEffect, useState } from "react";
import { useStateHamburger } from "../interface";

const SlideOnWindow = (moveToPourcentage: number): useStateHamburger => {
  const pixelEcart = (moveToPourcentage * window.innerWidth) / 100;

  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [clientXDown, setClientXDown] = useState<number>(0);
  const [clientXUp, setClientXUp] = useState<number>(0);
  const pointerup = (e: PointerEvent) => {
    setClientXUp(e.clientX);
  };
  const pointerdown = (e: PointerEvent) => {
    setClientXDown(e.clientX);
  };
  useEffect(() => {
    window.addEventListener("pointerup", pointerup);
    window.addEventListener("pointerdown", pointerdown);

    return () => {
      window.removeEventListener("pointerdown", pointerdown);
      window.addEventListener("pointerup", pointerup);
    };
  }, []);

  useEffect(() => {
    if (clientXUp - clientXDown >= pixelEcart) {
      // fermeture
      setIsHamburgerOpen(false);
    } else if (clientXDown - clientXUp >= pixelEcart) {
      setIsHamburgerOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientXUp]);

  return { isHamburgerOpen, setIsHamburgerOpen };
};
export default SlideOnWindow;
