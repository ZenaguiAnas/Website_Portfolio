import Image from "next/image";
import Link from "next/link";
import React from "react";
import bricoll from "../public/assets/projects/bricoll.png";
import graphtheory from "../public/assets/projects/graphtheory.png";
import pharmacy from "../public/assets/projects/pharmacy management.png";
import university from "../public/assets/projects/gst_scolarite.png";
import portfolio from "../public/assets/projects/portfolio.png";
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
            title="Bricol"
            backgroundImg={bricoll}
            projectUrl="https://github.com/ZenaguiAnas/bricoll"
            tech="React/NextJS - mongoDB - GraphQL - Redis - NGINX"
          />
          <ProjectItem
            title="GraphTheory App"
            backgroundImg={graphtheory}
            projectUrl="https://github.com/ZenaguiAnas/GraphTheoryProject"
            tech="Python - Tkinter - NetworkX"
          />
          <ProjectItem
            title="University Management"
            backgroundImg={university}
            projectUrl="https://github.com/ZenaguiAnas/GST-SCOLARITE"
            tech="C++ - Qt"
          />
          <ProjectItem
            title="Pharmacy management"
            backgroundImg={pharmacy}
            projectUrl="https://github.com/ZenaguiAnas/GPharmacie_JAVA_SWING"
            tech="Java - Swing"
          />
          <ProjectItem
            title="Website Portfolio"
            backgroundImg={portfolio}
            projectUrl="https://github.com/ZenaguiAnas/GPharmacie_JAVA_SWING"
            tech="React/NextJS - tailwind - Firebase"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
