import { useEffect, useState } from "react";
import { useStateHamburger } from "../interface";

const SlideOnWindow = (moveToPourcentage: number): useStateHamburger => {
  const pixelEcart = (moveToPourcentage * window.innerWidth) / 100;

  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [clientXDown, setClientXDown] = useState<number>(0);
  const [clientXUp, setClientXUp] = useState<number>(0);
  const pointerUp = (e: PointerEvent) => {
    setClientXUp(e.clientX);
  };
  const pointerDown = (e: PointerEvent) => {
    setClientXDown(e.clientX);
  };
  const touchEnd = (e: TouchEvent) => {
    setClientXUp(e.changedTouches[0].clientX);
  };
  const touchStart = (e: TouchEvent) => {
    setClientXDown(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);
    window.addEventListener("pointerup", pointerUp);
    window.addEventListener("pointerdown", pointerDown);
    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
      window.removeEventListener("pointerup", pointerUp);
      window.removeEventListener("pointerdown", pointerDown);
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
