import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anas Zenagui",
            "jobTitle": "Software Engineering Student",
            "url": "https://anaszenagui.vercel.app/",
            "sameAs": [
              "https://www.linkedin.com/in/anas-zenagui/",
              "https://github.com/ZenaguiAnas",
              "https://twitter.com/znagui_anass"
            ]
          }
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
