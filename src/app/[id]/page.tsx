// @ts-nocheck

import { GetStaticPaths } from "next/types";
import { POLL_LIST } from "../(data)/data";
import { POLL_SHAPE } from "../data-poll";
import PollCard from "./_components/card";

export default function Poll({ params: { id } }: { params: { id: string } }) {
  const { title, answers } = POLL_LIST?.[id] || {};
  const nextQuestions = findNextQuestion(id);
  const answersWithRoutes = addRoutesForAnswers(answers, nextQuestions);
  return (
    <section>
      <PollCard title={title} answers={answersWithRoutes} />
    </section>
  );
}

function findNextQuestion(currentQuestionID) {
  let result = new Map(Object.entries({ to: null, routes: null }));
  let isGetRedirectPath = false;

  function acc(obj) {
    for (const [key, val] of obj) {
      const isQuestion = val === "Q";
      const isS = val === "S";
      const isConditionalQuestion = val?.get?.("type") === "C";
      const isCurrentQuestion = key === currentQuestionID;

      if (isConditionalQuestion && isCurrentQuestion) {
        const conditionRoutes = [];
        for (const [key, answer] of val) {
          if (key === "type") continue;
          conditionRoutes.push([key, [...answer.keys()].at(0)]);
        }

        result.set("to", key);
        result.set("routes", conditionRoutes);

        return;
      }

      if (isCurrentQuestion) {
        isGetRedirectPath = true;
        continue;
      }

      if ((isConditionalQuestion || isQuestion) && isGetRedirectPath) {
        isGetRedirectPath = false;
        result.set("to", key);
        return;
      }

      if (typeof val === "object") {
        acc(val);
      }
    }
  }
  acc(POLL_SHAPE);

  return result;
}

function addRoutesForAnswers(answers: any, nextQuestions) {
  const conditionRoutes = nextQuestions.get("routes");
  const pathTo = nextQuestions.get("to");

  return answers?.map((answer) => {
    return {
      ...answer,
      href: !conditionRoutes
        ? pathTo
        : Object.fromEntries(conditionRoutes)?.[answer?.id],
    };
  });
}

export function generateStaticParams() {
  const polls = [...Object.keys(POLL_LIST)];

  return polls.map((id) => ({
    id,
  }));
}
