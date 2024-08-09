import Typography from "@/components/ui/Typography/Typography";
import PollCard from "./_components/PollCard/PollCard";
import styles from "./page.module.css";
import { POLL_SHAPE } from "@/data/shape-poll";
import { Suspense } from "react";

export default function Poll({ params: { id } }: { params: { id: string } }) {
  if (!POLL_SHAPE[id]) {
    return (
      <Typography className={styles.notFoundTitle} variant="h2">
        Question not found
      </Typography>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className={styles.main}>
        <PollCard questionId={id} />
      </section>
    </Suspense>
  );
}

export function generateStaticParams() {
  const polls = [...Object.keys(POLL_SHAPE)];

  return polls.map((id) => ({
    id,
  }));
}
