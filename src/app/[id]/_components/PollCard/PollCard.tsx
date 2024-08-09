"use client";

import { usePollStore } from "@/app/(store)/poll";
import Button from "@/components/ui/Button/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import Typography from "@/components/ui/Typography/Typography";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./PollCard.module.css";

import { useEffect, useMemo } from "react";
import { themeEnum, useTheme } from "@/lib/ThemeProvider";
import { replaceMask } from "@/utils/replaceMask";
import { Answer, POLL_SHAPE } from "@/data/shape-poll";

interface PollCardProps {
  questionId: string;
}

interface TypedPollCardProps {
  title: string;
  answers: Answer[];
  handleClick: (answer: Answer) => void;
  description?: string | null | undefined;
}

export default function PollCard({ questionId }: PollCardProps) {
  const { masks, setAnswer, setMask } = usePollStore((state) => state);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const { setTheme } = useTheme();
  const {
    title: { value: title },
    description,
    answers,
    style,
  } = POLL_SHAPE[questionId] || {};

  useEffect(() => {
    setTheme(style?.theme ? themeEnum.dark : themeEnum.light);
  }, [style?.theme]);

  const handleClick = ({
    mask,
    id,
    next: { href, fromParams, params: { screenid } = {} },
  }: Answer) => {
    setAnswer?.({ questionId, answerId: id });
    if (mask) {
      setMask?.({ mask: String(mask?.name), answerId: mask?.value });
    }

    const screenParamId = searchParams.get("screenid");
    if (screenParamId) {
      push(`/${screenParamId}`);
      return;
    }
    push(screenid ? `/${href}?screenid=${screenid}` : `/${href}`);
  };

  const ComponentCard = useMemo(() => {
    if (style?.theme) {
      return PollBannerCard;
    }
    if (description?.value) {
      return PollCardWithDescription;
    }
    return MainPollCard;
  }, [style, description]);

  const titleWithReplacedMask = useMemo(() => {
    return replaceMask(title, masks);
  }, [title, masks]);

  return (
    <ComponentCard
      title={titleWithReplacedMask}
      handleClick={handleClick}
      answers={answers}
      description={description?.value}
    />
  );
}

function PollBannerCard({
  title,
  answers,
  handleClick,
  description,
}: TypedPollCardProps) {
  return (
    <Card className={styles.pollCard}>
      <CardHeader>
        <CardTitle>
          <Typography className={styles.pollCard__title} variant="h3">
            {title}
          </Typography>
        </CardTitle>
        <CardDescription>
          <Typography
            className={styles.pollCard__bannerDescription}
            variant={"body2"}
          >
            {description}
          </Typography>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className={styles.answersList}>
          {answers?.map((answer) => (
            <li key={answer?.id}>
              <Button
                variant="secondary"
                size="large"
                onClick={() => handleClick(answer)}
              >
                {answer?.title}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
function PollCardWithDescription({
  title,
  answers,
  description,
  handleClick,
}: TypedPollCardProps) {
  return (
    <Card className={styles.pollCard}>
      <CardHeader>
        <CardTitle>
          <Typography className={styles.pollCard__title} variant="h3">
            {title}
          </Typography>
        </CardTitle>
        <CardDescription>
          <Typography variant={"h5"}>{description}</Typography>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className={styles.answersList}>
          {answers?.map((answer) => (
            <li key={answer?.id}>
              <Button variant="primary" onClick={() => handleClick(answer)}>
                {answer?.title}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
function MainPollCard({ title, answers, handleClick }: TypedPollCardProps) {
  return (
    <Card className={styles.pollCard}>
      <CardHeader>
        <CardTitle>
          <Typography variant="h3">{title}</Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className={styles.answersList}>
          {answers?.map((answer) => (
            <li key={answer?.id}>
              <Button variant="primary" onClick={() => handleClick(answer)}>
                {answer?.title}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
