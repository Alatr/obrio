// @ts-nocheck

const fs = require("fs");

const DATA = [
  {
    title: "Select your gender:",
    answers: ["Female", "Male"],
  },
  {
    title:
      "So we can get to know you better, tell us about your relationship status.",
    answers: ["Single", "In a relationship"],
  },
  {
    title: "Are you a single parent?",
    answers: ["Yes", "No"],
  },
  {
    title:
      "{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?",
    answers: [
      "I’m very unhappy with how things are going in my relationship",
      "I’m unhappy with parts of my relationship, but some things are working well",
      "I’m generally happy in my relationship",
    ],
  },
  {
    title: "Do you tend to overthink?",
    answers: ["Yes", "No"],
  },
  {
    title: "So how does it work?",
    description:
      "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
    answers: ["Next"],
  },
  {
    title: "Are you a parent?",
    answers: ["Yes", "No"],
  },
  {
    title: "What is most important to you?",
    answers: ["Success", "Romance", "Stability", "Freedom"],
  },
  {
    title: "Is emotional control tricky for you?",
    answers: ["Yes", "Sometimes", "Rarely", "Not at all"],
  },
  {
    title:
      "Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
    answers: [
      "I was unhappy with low things were going in my relationship",
      "I was unhappy with parts of my relationship, but some thing were working",
      "I was generally happy with my relationship",
      "I’ve never been in a relationship",
    ],
  },
  {
    title: "Is your partner an introvert or extrovert?",
    answers: ["Introvert", "Extrovert", "A bit of both"],
  },
  {
    title: "What is your partner’s gender?",
    answers: ["Female", "Male"],
  },
  {
    title: "Do you agree with the statement below?",
    description: "“My partner and I make sex a priority in our relationship”",
    answers: [
      "Strongly agree",
      "Agree",
      "Neutral",
      "Disagee",
      "Strongly disagree",
    ],
  },
  {
    title: "When you think about your relationship goals, you feel...?",
    answers: [
      "Optimistic! They are totally doable, with some guidance.",
      "Cautious. I’ve struggled before, but I’m hopeful.",
      "I’m feeling a little anxious, honestly.",
    ],
  },
  {
    title: "Where did you hear about us?",
    answers: [
      "Poster or Billboard",
      "Friend or Family",
      "Instagram",
      "Direct Mail or Package Insert",
      "Online TV or Streaming TV",
      "TV",
      "Radio",
      "Search Engine (Google, Bing, etc.)",
      "Newspaper or Magazine",
      "Facebook",
      "Blog Post or Website Review",
      "Podcast",
      "Influencer",
      "Youtube",
      "Pinterest",
      "Other",
    ],
  },
  {
    title: "So how does it work?",
    description:
      "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
    answers: ["Next"],
  },
];
const result = {};

DATA.forEach((question, i) => {
  const { title, answers, description } = question;
  const questionKey = `${i}q`;

  const answersWithId = answers.map((answer, y) => ({
    id: `${questionKey}${y}a`,
    text: answer,
  }));

  result?.[questionKey] = {
    id: questionKey,
    title,
    answers: answersWithId,
    description: description ?? null,
  };
});

const resultString = `export const POLL_LIST = ${JSON.stringify(result)}`;

fs.writeFile("./src/app/(data)/data.ts", resultString, (err) => {
  if (err) {
    console.error("An error occurred:", err);
    return;
  }
  console.log("File has been created successfully.");
});
