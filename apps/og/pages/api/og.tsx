// doc: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation

// why is font weight not working?!?!
// ref: https://fullstackheroes.com/resources/vercel-og-templates/custom-font/

import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { ReactElement } from "react";
import RootPage from "../../src/components/RootPage";
import TitleAndDesc from "../../src/components/TitleAndDesc";
import TitleOnly from "../../src/components/TitleOnly";
import Sinabro from "../../src/components/Sinabro";

export const config = {
  runtime: "experimental-edge",
};

// const fontBlack = fetch(
//   new URL("../../assets/NotoSansKR-Black.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontBold = fetch(
//   new URL("../../assets/NotoSansKR-Bold.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontLight = fetch(
//   new URL("../../assets/NotoSansKR-Light.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontMedium = fetch(
//   new URL("../../assets/NotoSansKR-Medium.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontRegular = fetch(
//   new URL("../../assets/NotoSansKR-Regular.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontThin = fetch(
//   new URL("../../assets/NotoSansKR-Thin.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

export default async function og(req: NextRequest) {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const type = params.get("type");
  const title = params.get("title");
  const description = params.get("description");

  const options = {
    width: 1200,
    height: 600,
    // fonts: [
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataBlack,
    //   //   style: "normal",
    //   //   weight: 900,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataBold,
    //   //   style: "normal",
    //   //   weight: 700,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataMedium,
    //   //   style: "normal",
    //   //   weight: 500,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataRegular,
    //   //   style: "normal",
    //   //   weight: 400,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataLight,
    //   //   style: "normal",
    //   //   weight: 300,
    //   // },
    //   {
    //     name: "Noto Sans KR",
    //     data: fontDataThin,
    //     style: "normal",
    //     weight: 100,
    //   },
    // ],
  };

  let ret: ReactElement = <div />;

  if (type === "root") {
    ret = <RootPage />;
  } else if (type === "sinabro") {
    ret = <Sinabro title={title || ""} description={description || ""} />;
  } else if (title && description) {
    ret = <TitleAndDesc title={title} description={description} />;
  } else if (title && !description) {
    ret = <TitleOnly title={title} />;
  }

  return new ImageResponse(ret, options);
}
