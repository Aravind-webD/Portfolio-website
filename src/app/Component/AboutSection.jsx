"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const Tab_data = [
    {
        title:"Skills",
        id:"skills",
        content: {
            list: <ul key="skills-list" className="list-disc pl-2">
                <li>JAVA</li>
                <li>SQL</li>
                <li>NODE.JS</li>
                <li>PYTHON</li>
            </ul>
        },
    },
    {
        title:"Education",
        id:"education",
        content: {
            list: <ul key="education-list" className="list-disc pl-2">
                <li>Diploma in ComputerSceince</li>
                <li>Graduated from GRIET</li>
            </ul>
        },

    },
    {
        title:"Certification",
        id:"certification",
        content: {
            list: <ul key="certification-list" className="list-disc pl-2">
                <li>Data Science THrough Python</li>
                <li>Full Stack Development</li>
            </ul>
        },
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending,  startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" >
                <Image src="/images/about-me.png" width={600} height={400} className="rounded-xl overflow-hidden" />
                <div className="mt-10 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-10">About Me</h2>
                    <p className="mt-4 text-base lg:text-lg">
                        I am a full stack developer with a passion for creating
                        interactive and responsive web applications. I have experience 
                        working with JavaScript, React, Redux, Node.js, Express, Postgresql,
                        HTML, CSS, and Git. I am a quick lerner anmd I am always
                        looking to expand my knowledge and skill set. I am a good 
                        at guiding people and managing them. I am excited to work with 
                        others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                                {" "}Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                                {" "}Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certification")} 
                            active={tab === "certification"}
                        >
                                {" "}Certification{" "}
                        </TabButton> 
                    </div>
                    <div className="mt-8">{Tab_data.find((t) => t.id === tab).content.list}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;