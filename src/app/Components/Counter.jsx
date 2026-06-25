"use client";
import react from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ target, duration = 2, isInt = true}) {
  const count = useMotionValue(0);
  let rounded;
  if (isInt) {
    rounded = useTransform(() => Math.round(count.get()));
  }
  else{
    rounded = useTransform(() => count.get().toFixed(1))
  }
  useEffect(() => {
    const controls = animate(count, target, { duration });
    return () => controls.stop();
  }, [count, target, duration]);

  return <motion.span>{rounded}</motion.span>;
}