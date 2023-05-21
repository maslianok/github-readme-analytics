import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const className = `${montserrat.className} ${montserrat.variable}`;

export async function fetchGoogleFont(font: string): Promise<Response> {
  let params = "";

  params += `family=${font}&`;

  params += "display=swap";

  const API = `https://fonts.googleapis.com/css2?${params}`;

  try {
    // Fetch the CSS file containing the font definition
    const response = await fetch(API, {
      headers: {
        // Make sure it returns TTF.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    });
    const cssText = await response.text();

    // Extract the URL of the font file
    const fontUrlMatch = cssText.match(/url\((.*?)\)/);
    if (!fontUrlMatch) {
      throw new Error("Failed to extract font URL");
    }

    const fontUrl = fontUrlMatch[1].replace(/['"]/g, ""); // Remove quotes around the URL

    // Fetch the font file
    return await fetch(fontUrl);
  } catch (error) {
    console.error("Failed to fetch font:", error);
    throw error;
  }
}
