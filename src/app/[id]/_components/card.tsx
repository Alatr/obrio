// @ts-nocheck

export default function PollCard({ title, answers }) {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {answers?.map((answer) => (
          <li key={answer?.id}>
            <a href={`/${answer?.href}`}>{answer?.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
