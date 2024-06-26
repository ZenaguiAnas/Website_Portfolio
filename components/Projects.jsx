import Image from "next/image";
import Link from "next/link";
import React from "react";
import bricoll from "../public/assets/projects/bricoll.png";
import graphtheory from "../public/assets/projects/graphtheory.png";
import pharmacy from "../public/assets/projects/pharmacy management.png";
import university from "../public/assets/projects/gst_scolarite.png";
import portfolio from "../public/assets/projects/portfolio.png";
import facejob from "../public/assets/projects/facejob.png";
import better_sql from "../public/assets/projects/better_sql.jpeg";
import parking from "../public/assets/projects/parking.jpeg";
import team_safet from "../public/assets/projects/team_safet.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Progressive Web Application for a Freelance Platform “BRICOL”"
            backgroundImg={bricoll}
            projectUrl="https://github.com/ZenaguiAnas/bricoll"
            tech="React/NextJS - mongoDB - GraphQL - Redis - NGINX"
          />
          <ProjectItem
            title="Smart Parking System"
            backgroundImg={parking}
            projectUrl="https://github.com/ZenaguiAnas/GraphTheoryProject"
            tech="Python - Tkinter - NetworkX"
          />
          <ProjectItem
            title="SaaS Insurance Platform for football `WEB3`"
            backgroundImg={team_safet}
            projectUrl="https://github.com/ZenaguiAnas/GST-SCOLARITE"
            tech="C++ - Qt"
          />
          <ProjectItem
            title="Oracle SQL Query Optimization App `BetterSQL`"
            backgroundImg={better_sql}
            projectUrl="https://github.com/ZenaguiAnas/GPharmacie_JAVA_SWING"
            tech="Java - Swing"
          />
          {/* <ProjectItem
            title="PWA for E-learning Platform"
            backgroundImg={portfolio}
            projectUrl="https://github.com/ZenaguiAnas/GPharmacie_JAVA_SWING"
            tech="React/NextJS - tailwind - Firebase"
          /> */}
          <ProjectItem
            title="Full Stack Web Application for Job Platform `facejob`"
            backgroundImg={facejob}
            projectUrl="https://github.com/ZenaguiAnas/GPharmacie_JAVA_SWING"
            tech="React/NextJS - tailwind - Firebase"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
