import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Blogs from "../components/Blogs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anas Zenagui | Software Engineering Student</title>
        <meta
          name="description"
          content="Anas Zenagui is a software engineering student specializing in DevOps, cloud computing, Web Dev, and building exceptional digital experiences."
        />
        <meta
          name="keywords"
          content="Anas Zenagui, Cloud, Software Engineer, DevOps Engineer, MLOps Engineer, Mobile Developer, Deep Learning, Data Engineer, IoT, Database, Linux, OS, UI/UX, Engineer, Engineering Student, Front-end Developer, Web Developer, Digital Experiences"
        />
        <meta name="author" content="Anas Zenagui" />
        <link rel="icon" href="/logo.png" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Anas Zenagui | Software Engineering Student"
        />
        <meta
          property="og:description"
          content="Anas Zenagui is a software engineering student specializing in cloud computing, DevOps, Web Dev, and building exceptional digital experiences."
        />
        <meta
          property="og:image"
          content="https://www.anaszenagui.me/Anas%20ZENAGUI%20-%20Website.png"
        />
        <meta property="og:url" content="https://www.anaszenagui.me/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anas Zenagui | Cloud and DevOps Engineer"
        />
        <meta
          name="twitter:description"
          content="Anas Zenagui is a software engineering student specializing in cloud computing, DevOps, Web Dev, and building exceptional digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://www.anaszenagui.me/Anas%20ZENAGUI%20V1.jpeg"
        />

        {/* Additional Meta Tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Schema.org JSON-LD for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Anas Zenagui",
            "jobTitle": "Cloud & DevOps Engineer",
            "url": "https://www.anaszenagui.me/",
            "image": "https://www.anaszenagui.me/Anas%20ZENAGUI%20-%20Website.png",
            "sameAs": [
              "https://www.linkedin.com/in/anas-zenagui/",
              "https://github.com/ZenaguiAnas",
            ],
            "description": "Anas Zenagui, a Cloud and DevOps Engineer with expertise in MLOps, Full Stack Web Development, and building exceptional digital experiences.",
          })}
        </script>

        {/* Breadcrumb Schema.org JSON-LD for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.anaszenagui.me/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://www.anaszenagui.me/#about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Skills",
                "item": "https://www.anaszenagui.me/#skills"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Projects",
                "item": "https://www.anaszenagui.me/#projects"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Certifications",
                "item": "https://www.anaszenagui.me/#certifications"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Blogs",
                "item": "https://www.anaszenagui.me/#blogs"
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": "Contact",
                "item": "https://www.anaszenagui.me/#contact"
              }
            ]
          })}
        </script>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Blogs />
      <Contact />
    </div>
  );
}
