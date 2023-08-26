import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkPurple: "#11072F",
        cardLoader: "#6A4DBC",
      },
      fontFamily: {
        primary_Black: "poppins_Black",
        primary_BlackItalic: "poppins_BlackItalic",
        primary_Bold: "poppins_Bold",
        primary_BoldItalic: "poppins_BoldItalic",
        primary_ExtraBold: "poppins_ExtraBold",
        primary_ExtraBoldItalic: "poppins_ExtraBoldItalic",
        primary_ExtraLight: "poppins_ExtraLight",
        primary_ExtraLightItalic: "poppins_ExtraLightItalic",
        primary_Italic: "poppins_Italic",
        primary_Light: "poppins_Light",
        primary_LightItalic: "poppins_LightItalic",
        primary_Medium: "poppins_Medium",
        primary_MediumItalic: "poppins_MediumItalic",
        primary_Regular: "poppins_Regular",
        primary_SemiBold: "poppins_SemiBold",
        primary_SemiBoldItalic: "poppins_SemiBoldItalic",
        primary_Thin: "poppins_Thin",
        primary_ThinItalic: "poppins_ThinItalic",
      },
    },
  },
  plugins: [],
};
export default config;
