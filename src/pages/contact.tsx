import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Modules/SEO";

export default function Contact() {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo: "site/logo",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      title : "CONTACT TITLE HERE",
      description : "CONTACT DESCRIPTION HERE",
    });
  // SEO

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />
    </>
  );
}
