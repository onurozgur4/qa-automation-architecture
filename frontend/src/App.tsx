import { useState } from "react";
import Tabs from "./components/Tabs";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [activeTab, setActiveTab] = useState<"create" | "list">("create");

  return (
    <div style={{ padding: 20 }}>
      <h1 data-testid="app-title">QA Automation Platform</h1>

      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "create" && (
        <UserForm onUserCreated={() => {}} />
      )}

      {activeTab === "list" && <UserList />}
    </div>
  );
}