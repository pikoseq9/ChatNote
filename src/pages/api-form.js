"use client";

import ApiKeyForm from "../components/ApiKeyForm";

export default function ApiFormPage() {
  const handleApiKeySubmit = (apiKey) => {
    //here the key's usage
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wprowadź swój klucz API</h1>
      <ApiKeyForm onSubmitApiKey={handleApiKeySubmit} />
    </div>
  );
}
