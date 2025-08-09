import styles from "./page.module.css";
import Chat from "../components/Chat.js";
import Card from "../components/Card.js";
import ApiKeyForm from "@/components/ApiKeyForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <Card>
        <ApiKeyForm />
      </Card>
    </div>
  );
}
