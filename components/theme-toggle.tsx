"use client"

import useNextValue from "@/components/hooks/use-next-value";
import { cn } from "@/lib/utils";
import {
  IconContrastFilled,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const controlsSun = useAnimation();
  const controlsMoon = useAnimation();
  const controlsContrast = useAnimation();

  const iconVariants = {
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (theme === "system") {
      controlsSun.start("hidden");
      controlsContrast.start("visible");
      controlsMoon.start("hidden");
    } else {
      controlsSun.start(theme === "light" ? "visible" : "hidden");
      controlsMoon.start(theme === "dark" ? "visible" : "hidden");
      controlsContrast.start("hidden");
    }
  }, [mounted, controlsContrast, controlsMoon, controlsSun, theme]);

  const nextTheme = useNextValue(
    ["light", "system", "dark"] as const,
    theme as string,
  );

  if (!mounted) {
    return (
      <motion.div
        className="h-6 w-10 flex items-center bg-zinc-100 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/30 dark:ring-white/10 rounded-full shadow-inner dark:shadow-black/10"
        initial={false}
      />
    );
  }

  return (
    <button
      className="flex items-center gap-2 cursor-pointer group"
      onClick={() => {
        setTheme(nextTheme);
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "h-6 w-10 flex items-center bg-zinc-100 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/30 dark:ring-white/10 rounded-full shadow-inner dark:shadow-black/10 relative",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            animate={{
              x: theme === "light" ? 4 : theme === "system" ? 12 : 20,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(
              "rounded-full size-4 transition-all duration-300 ease-in-out relative",
            )}
          >
            <motion.div
              className="size-4 absolute top-0 left-0"
              variants={iconVariants}
              initial="hidden"
              animate={theme === "light" ? "visible" : "hidden"}
            >
              <IconSunFilled className="size-4 text-amber-500" />
            </motion.div>
            <motion.div
              className="size-4 absolute top-0 left-0"
              variants={iconVariants}
              initial="hidden"
              animate={theme === "system" ? "visible" : "hidden"}
            >
              <IconContrastFilled className="size-4 text-zinc-600 dark:text-zinc-400 dark:rotate-180" />
            </motion.div>
            <motion.div
              className="size-4 absolute top-0 left-0"
              variants={iconVariants}
              initial="hidden"
              animate={theme === "dark" ? "visible" : "hidden"}
            >
              <IconMoonFilled className="size-4 text-zinc-400" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
} 