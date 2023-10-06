/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Uber Clone App",
    description:
      "Developed a clone of the Uber app with the following features",
  },
  {
    title: "Swift Argument Parser",
    description:
      "Contributed to the development of the Swift Argument Parser, a popular open-source library that makes it easy to parse command-line arguments in Swift.",
  },
  {
    title: "3D Web Roadmap",
    description:
      "Developed and maintained a comprehensive roadmap for the development of the 3D web, including information on the latest trends and technologies, as well as resources and tools for developers.",
  },
  {
    title: "Booktalk",
    description:
      "Developed an ebook management platform called BookTalk, which allows users to keep track of their ebooks, read them online, and share them with others.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
