import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

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
          content="https://media.licdn.com/dms/image/D4E03AQFspr6MI03aJw/profile-displayphoto-shrink_200_200/0/1687714548973?e=2147483647&v=beta&t=lU2LIguPkED12ztN2sF_K0u6NlsR5UgXP6fW9dBIHA0"
        />
        <meta property="og:url" content="https://anaszenagui.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anas Zenagui | Cloud and DevOps Engineer"
        />
        <meta
          name="twitter:description"
          content="Anas Zenagui is a software engineering student specializing in cloud computing, MLOps, and building exceptional digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/D4E03AQFspr6MI03aJw/profile-displayphoto-shrink_200_200/0/1687714548973?e=2147483647&v=beta&t=lU2LIguPkED12ztN2sF_K0u6NlsR5UgXP6fW9dBIHA0"
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
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
