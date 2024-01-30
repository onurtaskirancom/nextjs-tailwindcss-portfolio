"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div>
        <Image
          className="float-left"
          src="/images/photoshop.png"
          width={32}
          height={32}
          alt="emre-taskiran"
        />
        <Image
          className="float-left"
          src="/images/illustrator.png"
          width={32}
          height={32}
          alt="emre-taskiran"
        />
        <Image
          className="float-left"
          src="/images/indesign.png"
          width={32}
          height={32}
          alt="emre-taskiran"
        />
        <Image
          className="float-left"
          src="/images/premiere.png"
          width={32}
          height={32}
          alt="emre-taskiran"
        />
        <Image
          className="float-left"
          src="/images/javascript.png"
          width={32}
          height={32}
          alt="emre-taskiran"
        />
        <Image
          className="float-left"
          src="/images/html5.png"
          width={32}
          height={32}
          alt="emre-taskiran"
        />
        <Image
          className="float-left"
          src="/images/css.png"
          width={32}
          height={32}
          alt="emre-taskiran"
        />
      </div>
      // <ul className="list-disc pl-2">
      //   <li>
      //     <Image
      //       src="/images/photoshop.png"
      //       width={32}
      //       height={32}
      //       alt="emre-taskiran"
      //     />
      //   </li>
      //   <li>
      //     <Image
      //       src="/images/illustrator.png"
      //       width={32}
      //       height={32}
      //       alt="emre-taskiran"
      //     />
      //   </li>
      //   <li>
      //     <Image
      //       src="/images/indesign.png"
      //       width={32}
      //       height={32}
      //       alt="emre-taskiran"
      //     />
      //   </li>
      //   <li>
      //     <Image
      //       src="/images/premiere.png"
      //       width={32}
      //       height={32}
      //       alt="emre-taskiran"
      //     />
      //   </li>
      //   <li>
      //     <Image
      //       src="/images/javascript.png"
      //       width={32}
      //       height={32}
      //       alt="emre-taskiran"
      //     />
      //   </li>
      //   <li>
      //     <Image
      //       src="/images/html5.png"
      //       width={32}
      //       height={32}
      //       alt="emre-taskiran"
      //     />
      //   </li>
      //   <li>
      //     <Image
      //       src="/images/css.png"
      //       width={32}
      //       height={32}
      //       alt="emre-taskiran"
      //     />
      //   </li>
      // </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Graphic Design</li>
        <li>Economy</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Graphic Designer</li>
        <li>Professional Web Designer</li>
        <li>Social Media Expert</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div><br/></div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/emre-taskiran.png" width={500} height={500} alt="emre-taskiran"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I live in Istanbul. I have been working on graphic design and web
            design for many years. I have three licenses: boxing, kick-boxing
            and muay thai. I am someone who is open to innovations, loves to
            learn and can communicate effectively.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >

              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >

              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >

              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
