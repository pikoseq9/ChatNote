import styles from "./page.module.css";
import Chat from "../components/Chat.js";
import Card from "../components/Card.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <Card>
        <Chat />
      </Card>
    </div>
  );
}
