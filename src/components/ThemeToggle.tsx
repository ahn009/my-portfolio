"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#f5f5f5] hover:border-[#d4af37]/50 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? (
          <FaMoon className="w-4 h-4" />
        ) : (
          <FaSun className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
}
