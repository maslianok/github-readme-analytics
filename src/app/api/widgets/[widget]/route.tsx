import { NextResponse, ImageResponse } from "next/server";
import z from "zod";

import { fetchGoogleFont } from "@/utils/font";

import widgets from "@/widgets/widgets";
import { getCardSize } from "@/widgets/utils";
import { getProfile } from "@/server/routers/github/getProfile";

import type { Profile } from "@/server/routers/github/getProfile/types";
import { getWidgetParams } from "../utils";

const font = fetchGoogleFont("Montserrat").then((res) => res.arrayBuffer());

export async function GET(
  request: Request,
  options: {
    params: { widget: string };
  }
) {
  const { searchParams } = new URL(request.url);
  const { widget } = options.params;

  const Widget = widgets[widget];

  if (!Widget) {
    return NextResponse.json({ message: "Widget not found" }, { status: 404 });
  }

  let params: ReturnType<typeof getWidgetParams>;

  try {
    params = getWidgetParams(searchParams);
  } catch (e) {
    const zodError = e as z.ZodError;
    return NextResponse.json({ message: zodError.message }, { status: 400 });
  }

  const { username, size, theme, border, rounded } = params;

  let githubProfile: Profile;

  // Fetch user data
  try {
    githubProfile = await getProfile({ username });
  } catch (e) {
    // User not found
    if (e instanceof Error && e.message === "User not found") {
      return NextResponse.json({ message: e.message }, { status: 404 });
    }

    // Failed to load profile Data
    return NextResponse.json(
      { message: "Failed to load user profile data", error: e },
      { status: 500 }
    );
  }

  const { height, width } = getCardSize(size);

  const montserrat = await font;

  const html = (
    <Widget
      githubProfile={githubProfile}
      size={size}
      theme={theme}
      rounded={rounded}
      border={border}
    />
  );

  return new ImageResponse(html, {
    width,
    height,
    fonts: [
      {
        name: "Montserrat",
        data: montserrat,
        style: "normal",
      },
    ],
  });
}

export const generateStaticParams = () =>
  Object.keys(widgets).map((widget) => ({
    slug: widget,
  }));

export const dynamicParams = false;
