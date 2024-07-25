import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div
            className="flex flex-col items-center justify-center pb-20"
            id="projects"
        >
            <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14">
                My Projects
            </h1>
            <div className="flex flex-col gap-10">
                <div className="h-full w-full flex flex-col md:flex-row gap-10 px-40">
                    <ProjectCard
                        src="/SentimentAnalysis.png"
                        title="Machine Learning Web App"
                        description="An complete event management system for all your needs. This project was built using React, Node.js, Express, and MongoDB. Additionally this project was built to SLIIT 2nd year 2nd semester IT Project."
                        live_link="https://github.com/pasindusgkmp/sentiment_analysis_project---machine-learning.git"
                    />
                    <ProjectCard
                        src="/WorldsFriends.png"
                        title="WorldsFriends"
                        description="This is an online text summarizer app which is developed using Android studio. This app is capable of summarizing any given text into a shorter version. This project uses the facebook's bart LLM for the summarization process."
                        live_link="https://github.com/pasindusgkmp/guest-house-management-system.git"
                    />
                    <ProjectCard
                        src="/OpenCv.png"
                        title="FaceDetection"
                        description="This is a simple Landing page for a sushi ordering website. This project was built for get an good idea about css and css flexbox. Additionally this project uses AOS library for animations."
                        live_link="https://github.com/pasindusgkmp/Face-Detection-in-Python-Using-OpenCV-.git"
                    />
                </div>
                <div className="h-full w-full flex flex-col md:flex-row gap-10 px-40">
                    <ProjectCard
                        src="/Portfolio.png"
                        title="Portfolio"
                        description="VideQuest is a video browsing system which is developed using java servlets. This project capable of upload, delete and browse videos. Also users can comment and like videos. This project was built to SLIIT 2st year 1nd semester OOP Project."
                        live_link= "https://github.com/pasindusgkmp/portfolio.git"
                    />
                    <ProjectCard
                        src="/Mern.png"
                        title="MearnProject"
                        description="InnRooms is a hotel management system which is developed using MERN. This project is capable of manage hotel rooms, customers, reservations and payments. The payments are managed through stripe. Also this project has a admin panel for the hotel manager."
                        live_link="https://github.com/pasindusgkmp/mern-stack-project.git"
                    />
                    <ProjectCard
                        src="/hangman.png"
                        title="Hangman Game"
                        description="This is a simple hangman game which is developed using TypeScript. This project was built to get an good idea about TypeScript and how to use it. Additionally this project uses the words api for the words."
                        live_link="https://github.com/Scar1109/HangMan-Game--TypeScript"
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
