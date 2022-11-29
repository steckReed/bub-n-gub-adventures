import "@Styles/_global-styles.scss";
/* @Dragn' Drop-Library-Modules/index Import Note:
    - Dragn' Drop UI Currently not Built
    - Using 'mantine ui' as temp solution
    
    ```
    import { Navbar, Footer } from "@Dragn' Drop-Library-Modules/index"; 
    ```
*/
import { LogoJsonLd, DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <DefaultSeo {...SEO.DefaultSeo} />

      {/* <Navbar />  */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
