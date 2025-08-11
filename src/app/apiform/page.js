"use client";

import ApiKeyForm from "@/components/ApiKeyForm";
import Card from "@/components/Card";
import styles from "@/app/page.module.css";

export default function ApiKeyFormPage() {
  const handleApiKeySubmit = (apiKey) => {
    //here the key's usage
  };

  return (
    <div className={styles.page}>
      <Card>
        <ApiKeyForm onSubmitApiKey={handleApiKeySubmit} />
      </Card>
    </div>
  );
}
