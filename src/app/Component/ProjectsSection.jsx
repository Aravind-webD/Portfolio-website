import React from "react";
import ProjectCard from "./ProjectCard";
import { preconnect } from "next/dist/server/app-render/entry-base";

const projectsData = [
    {
        id:1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image:"/images/projects/1.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    }
    //update your projects everytime from here
]

const ProjectsSection = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold text-white mt-4 mb-8 md:mb-12 text-center ">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">All</button>
            <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">Web</button>
        </div>
        <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}</div>
    </div>
  );
};

export default ProjectsSection;