import styles from "./page.module.css";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/Card/Card";
import { POLL_SHAPE } from "@/data/shape-poll";
import Link from "next/link";

export default function Home() {
  const firstQuestion = Object.keys(POLL_SHAPE).at(0);

  return (
    <main className={styles.main}>
      <Card>
        <CardHeader>
          <CardTitle>Hi, 😺</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href={String(firstQuestion)}>start answering</Link>
        </CardContent>
      </Card>
    </main>
  );
}
