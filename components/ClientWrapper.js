"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpaceCatLoader from "./SpaceCatLoader";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const handleLoad = () => {
      // Exactly 1.5s display + 0.5s transition = 2.0s total duration
      setTimeout(() => setIsLoading(false), 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timer
      const fallback = setTimeout(handleLoad, 3000);
      
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(12px)",
              scale: 1.05
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] bg-[#020205]"
          >
            <SpaceCatLoader />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
