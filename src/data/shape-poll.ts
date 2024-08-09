export type AnswerNext = {
  href?: string;
  params?: {
    screenid?: string;
  };
  fromParams?: string;
};

export type Answer = {
  id: string;
  title: string;
  mask?: {
    name: string;
    value: string;
  };
  next: AnswerNext;
};

export type Question = {
  id: string;
  title: {
    value: string;
  };
  answers: Answer[];
  description?: {
    value: string;
  };
  style?: {
    theme: string;
  };
};

export type PollShape = {
  [key: string]: Question;
};

export const POLL_SHAPE: PollShape = {
  "1q": {
    id: "1q",
    title: {
      value: "Select your gender:",
    },
    answers: [
      {
        id: "1q1a",
        title: "Female",
        mask: {
          name: "{gender}",
          value: "Female",
        },
        next: {
          href: "2q",
        },
      },
      {
        id: "1q2a",
        title: "Male",
        mask: {
          name: "{gender}",
          value: "Male",
        },
        next: {
          href: "2q",
        },
      },
    ],
  },
  "2q": {
    id: "2q",
    title: {
      value:
        "So we can get to know you better, tell us about your relationship status.",
    },
    answers: [
      {
        id: "2q1a",
        title: "Single",
        next: {
          href: "3q",
        },
      },
      {
        id: "2q2a",
        title: "In a relationship",
        next: {
          href: "10q",
        },
      },
    ],
  },
  "3q": {
    id: "3q",
    title: {
      value: "Are you a single parent?",
    },
    answers: [
      {
        id: "3q1a",
        title: "Yes",
        mask: {
          name: "{children}",
          value: "who have children",
        },
        next: {
          href: "4q",
        },
      },
      {
        id: "3q2a",
        title: "No",
        mask: {
          name: "{children}",
          value: "",
        },
        next: {
          href: "4q",
        },
      },
    ],
  },
  "4q": {
    id: "4q",
    title: {
      value:
        "{gender} {children} need a slightly different approach to improve their relationship. Which statement best describes you?",
    },
    answers: [
      {
        id: "4q1a",
        title: "I’m very unhappy with how things are going in my relationship",
        next: {
          href: "5q",
        },
      },
      {
        id: "4q2a",
        title:
          "I’m unhappy with parts of my relationship, but some things are working well",
        next: {
          href: "5q",
        },
      },
      {
        id: "4q3a",
        title: "I’m generally happy in my relationship",
        next: {
          href: "5q",
        },
      },
    ],
  },
  "5q": {
    id: "5q",
    title: {
      value: "Do you tend to overthink?",
    },
    answers: [
      {
        id: "5q1a",
        title: "Yes",
        next: {
          href: "6q",
          params: {
            screenid: "7q",
          },
        },
      },
      {
        id: "5q2a",
        title: "No",
        next: {
          href: "6q",
          params: {
            screenid: "8q",
          },
        },
      },
    ],
  },
  "6q": {
    id: "6q",
    style: {
      theme: "dark",
    },
    title: {
      value: "So how does it work?",
    },
    description: {
      value:
        "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
    },
    answers: [
      {
        id: "6q1a",
        title: "Next",
        next: {
          fromParams: "screenid",
        },
      },
    ],
  },
  "7q": {
    id: "7q",
    title: {
      value: "What is most important to you?",
    },
    answers: [
      {
        id: "7q1a",
        title: "Success",
        next: {
          href: "9q",
        },
      },
      {
        id: "7q2a",
        title: "Romance",
        next: {
          href: "9q",
        },
      },
      {
        id: "7q3a",
        title: "Stability",
        next: {
          href: "9q",
        },
      },
      {
        id: "7q4a",
        title: "Freedom",
        next: {
          href: "9q",
        },
      },
    ],
  },
  "8q": {
    id: "8q",
    title: {
      value: "Is emotional control tricky for you?",
    },
    answers: [
      {
        id: "8q1a",
        title: "Yes",
        next: {
          href: "9q",
        },
      },
      {
        id: "8q2a",
        title: "Sometimes",
        next: {
          href: "9q",
        },
      },
      {
        id: "8q3a",
        title: "Rarely",
        next: {
          href: "9q",
        },
      },
      {
        id: "8q4a",
        title: "Not at all",
        next: {
          href: "9q",
        },
      },
    ],
  },
  "9q": {
    id: "9q",
    title: {
      value: "Where did you hear about us?",
    },
    answers: [
      {
        id: "9q0a",
        title: "Poster or Billboard",
        next: {
          href: "/",
        },
      },
      {
        id: "9q1a",
        title: "Friend or Family",
        next: {
          href: "/",
        },
      },
      {
        id: "9q2a",
        title: "Instagram",
        next: {
          href: "/",
        },
      },
      {
        id: "9q3a",
        title: "Direct Mail or Package Insert",
        next: {
          href: "/",
        },
      },
      {
        id: "9q4a",
        title: "Online TV or Streaming TV",
        next: {
          href: "/",
        },
      },
      {
        id: "9q5a",
        title: "TV",
        next: {
          href: "/",
        },
      },
      {
        id: "9q6a",
        title: "Radio",
        next: {
          href: "/",
        },
      },
      {
        id: "9q7a",
        title: "Search Engine (Google, Bing, etc.)",
        next: {
          href: "/",
        },
      },
      {
        id: "9q8a",
        title: "Newspaper or Magazine",
        next: {
          href: "/",
        },
      },
      {
        id: "9q9a",
        title: "Facebook",
        next: {
          href: "/",
        },
      },
      {
        id: "9q10a",
        title: "Blog Post or Website Review",
        next: {
          href: "/",
        },
      },
      {
        id: "9q11a",
        title: "Podcast",
        next: {
          href: "/",
        },
      },
      {
        id: "9q12a",
        title: "Influencer",
        next: {
          href: "/",
        },
      },
      {
        id: "9q13a",
        title: "Youtube",
        next: {
          href: "/",
        },
      },
      {
        id: "9q14a",
        title: "Pinterest",
        next: {
          href: "/",
        },
      },
      {
        id: "9q15a",
        title: "Other",
        next: {
          href: "/",
        },
      },
    ],
  },
  "10q": {
    id: "10q",
    title: {
      value: "Are you a parent?",
    },
    answers: [
      {
        id: "10q1a",
        title: "Yes",
        next: {
          href: "11q",
        },
      },
      {
        id: "10q2a",
        title: "No",
        next: {
          href: "11q",
        },
      },
    ],
  },
  "11q": {
    id: "11q",
    title: {
      value:
        "Single {gender} {children} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
    },
    answers: [
      {
        id: "11q1a",
        title: "I was unhappy with low things were going in my relationship",
        next: {
          href: "12q",
        },
      },
      {
        id: "11q2a",
        title:
          "I was unhappy with parts of my relationship, but some thing were working",
        next: {
          href: "12q",
        },
      },
      {
        id: "11q3a",
        title: "I was generally happy with my relationship",
        next: {
          href: "12q",
        },
      },
      {
        id: "11q4a",
        title: "I’ve never been in a relationship",
        next: {
          href: "12q",
        },
      },
    ],
  },
  "12q": {
    id: "12q",
    title: {
      value: "Is your partner an introvert or extrovert?",
    },
    answers: [
      {
        id: "12q1a",
        title: "Introvert",
        next: {
          href: "13q",
        },
      },
      {
        id: "12q2a",
        title: "Extrovert",
        next: {
          href: "13q",
        },
      },
      {
        id: "12q3a",
        title: "A bit of both",
        next: {
          href: "13q",
        },
      },
    ],
  },
  "13q": {
    id: "13q",
    title: {
      value: "What is your partner’s gender?",
    },
    answers: [
      {
        id: "12q1a",
        title: "Male",
        next: {
          href: "14q",
        },
      },
      {
        id: "12q2a",
        title: "Female",
        next: {
          href: "14q",
        },
      },
    ],
  },
  "14q": {
    id: "14q",
    title: {
      value: "Do you agree with the statement below?",
    },
    description: {
      value: "“My partner and I make sex a priority in our relationship”",
    },
    answers: [
      {
        id: "14q1a",
        title: "Strongly agree",
        next: {
          href: "15q",
        },
      },
      {
        id: "14q2a",
        title: "Agree",
        next: {
          href: "15q",
        },
      },
      {
        id: "14q3a",
        title: "Neutral",
        next: {
          href: "15q",
        },
      },
      {
        id: "14q4a",
        title: "Disagee",
        next: {
          href: "15q",
        },
      },
      {
        id: "14q5a",
        title: "Strongly disagree",
        next: {
          href: "15q",
        },
      },
    ],
  },
  "15q": {
    id: "15q",
    title: {
      value: "When you think about your relationship goals, you feel...?",
    },
    answers: [
      {
        id: "15q1a",
        title: "Optimistic! They are totally doable, with some guidance.",
        next: {
          href: "/",
        },
      },
      {
        id: "15q2a",
        title: "Cautious. I’ve struggled before, but I’m hopeful.",
        next: {
          href: "/",
        },
      },
      {
        id: "15q3a",
        title: "I’m feeling a little anxious, honestly.",
        next: {
          href: "/",
        },
      },
    ],
  },
};
