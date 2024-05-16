import fontLight from "../assets/fonts/SourceSans3/Light.ttf";
import fontRegular from "../assets/fonts/SourceSans3/Regular.ttf";
import fontMedium from "../assets/fonts/SourceSans3/Medium.ttf";
import fontSemiBold from "../assets/fonts/SourceSans3/SemiBold.ttf";
import fontBold from "../assets/fonts/SourceSans3/Bold.ttf";
import fontExtraBold from "../assets/fonts/SourceSans3/ExtraBold.ttf";
// lato
import latoFontRegular from "../assets/fonts/Lato/Lato-Regular.ttf";
import latoFontBold from "../assets/fonts/Lato/Lato-Bold.ttf";
// segoe UI
import segoeRegular from "../assets/fonts/SegoeUi/Regular.ttf";
import segoeLight from "../assets/fonts/SegoeUi/Light-300.ttf";
import segoeItalic from "../assets/fonts/SegoeUi/Italique-400.ttf";
import segoeLightItalic from "../assets/fonts/SegoeUi/Light-Italic-300.ttf";
import segoeBold from "../assets/fonts/SegoeUi/Black-900.ttf";
import segoeBoldItalic from "../assets/fonts/SegoeUi/Black-Italic-900.ttf";
import segoeSemiBold from "../assets/fonts/SegoeUi/Semibold-600.ttf";
import segoeSemiBoldItalic from "../assets/fonts/SegoeUi/Semibold-Italic-600.ttf";
import segoeSemiLight from "../assets/fonts/SegoeUi/Semilight-350.ttf";
import segoeSemiLightItalic from "../assets/fonts/SegoeUi/Semilight-Italic-350.ttf";
export const MuiCssBaseline = {
  styleOverrides: {
    html: [
      `
      html { font-size: 14px; }
      @font-face {
          font-family: 'fontLight';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Source Sans 3'), local('Light'), url(${fontLight}) format('truetype');
      }
      @font-face {
          font-family: 'fontRegular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Source Sans 3'), local('Regular'), url(${fontRegular}) format('truetype');
      }
      @font-face {
          font-family: 'fontMedium';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Source Sans 3'), local('Medium'), url(${fontMedium}) format('truetype');
      }
      @font-face {
          font-family: 'fontSemiBold';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Source Sans 3'), local('SemiBold'), url(${fontSemiBold}) format('truetype');
      }
      @font-face {
          font-family: 'fontBold';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Source Sans 3'), local('Bold'), url(${fontBold}) format('truetype');
      }
      @font-face {
          font-family: 'fontExtraBold';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: local('Source Sans 3'), local('ExtraBold'), url(${fontExtraBold}) format('truetype');
      }
      @font-face {
          font-family: 'latoFontRegular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Lato'), local('Lato-Regular'), url(${latoFontRegular}) format('truetype');
      }
      @font-face {
          font-family: 'latoFontBold';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Lato'), local('Lato-Bold'), url(${latoFontBold}) format('truetype');
      }
      @font-face {
        font-family: 'segoeRegular';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Segoe UI'), local('Lato-Bold'), url(${segoeRegular}) format('truetype');
       }
       @font-face {
        font-family: 'segoeLight';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: local('Segoe UI'), local('Lato-Bold'), url(${segoeLight}) format('truetype');
       }
       @font-face {
        font-family: 'segoeSemiBold';
        font-style: normal;
        font-display: swap;
        font-weight: 600;
        src: local('Segoe UI'), local('Lato-Bold'), url(${segoeSemiBold}) format('truetype');
       }
       @font-face {
        font-family: 'segoeBold';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('Segoe UI'), local('Lato-Bold'), url(${segoeBold}) format('truetype');
       }
       @font-face {
        font-family: 'segoeExtraBold';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: local('Segoe UI'), local('ExtraBold'), url(${segoeBold}) format('truetype');
        }
        @font-face {
          font-family: 'segoeItalic';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Segoe UI'), local('ExtraBold'), url(${segoeItalic}) format('truetype');
          }
    `,
    ],
  },
};

export const FONT = {
  light: "fontLight",
  regular: "fontRegular",
  medium: "fontMedium",
  bold: "fontBold",
  extraBold: "fontExtraBold",
  latoFontRegular: "latoFontRegular",
  latoFontBold: "latoFontBold",
};
export const LATO_FONT = {
  regular: "latoFontRegular",
  bold: "latoFontBold",
};
export const SEGOE_FONT = {
  regular: "segoeRegular",
  light: "segoeLight",
  medium: "segoeSemiBold",
  bold: "segoeBold",
  extraBold: "segoExtraBold",
  segoeItalic: "segoeItalic",
};

// px to rem base=14px
/**
 * 12px - 0.857rem
 * 14px - 1rem
 * 15px - 1.071rem
 * 16px - 1.143rem
 * 18px - 1.286rem
 * 20px - 1.429rem
 * 22px - 1.571rem
 * 24px - 1.714rem
 * 26px - 1.857rem
 * 28px - 2rem
 * 30px - 2.143rem
 */
