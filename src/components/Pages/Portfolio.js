import React from 'react';
import PortfolioCard from '../PortfolioCard';
import Image from '../Pages/images/EventDash.png';
import Image1 from '../Pages/images/CucumberOrPickle.jpg';
import Image2 from '../Pages/images/Tech-Blogger.png';
import Image3 from '../Pages/images/socially-netwroking.png';
import Image4 from '../Pages/images/Make-me-a-logo-1.png';
import Image5 from '../Pages/images/coming-soon.jpg';




export default function Portfolio() {

    const projects = [
        {
            title: "EventDash",
            img: Image,
            url: "https://caseyfee.github.io/EventDash/",
            description: "EventDash is a dynamic web search page that will help users discover nearby local events based on their radius input. The website also provides driving directions to the user's selected event."
        },
        {
            title: "Cucumber or Pickle",
            img: Image1,
            url: "https://cucumber-or-pickle.herokuapp.com/",
            description: "Create daily mini polls to see if your friends agree with your opinions."
        },
        {
            title: "Make-Me-A-Logo",
            img: Image4,
            url: "https://github.com/anryl050/MakeMeALogo",
            description: "Command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file."
        },
        {
            title: "Socially-Networking",
            img: Image3,
            url: "https://github.com/anryl050/socialy-networking",
            description: "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list"
        },
        {
            title: "Tech Bloger",
            img: Image2,
            url: "https://about-tech-blog.herokuapp.com/",
            description: " CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well"
        },
        {
            title: "Shifa",
            img: Image5,
            url: "/",
            description: "Place Holder for the upcoming Project 3. Preoject will demostrate effective use of the ReactJS, MERN concept, use of the Appollo and Mongo DB."
        },

    ]

    return (
        <section className="place-content-center h-screen py-20">
                <h1 className="flex flex-wrap justify-center pb-6">Portfolio</h1>
            <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                {projects.map(project => {
                    return <PortfolioCard project={project} />
                })}
            </div>
        </section >
    );
}
