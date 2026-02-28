type Props = {
  activeTab: "create" | "list";
  onChange: (tab: "create" | "list") => void;
};

export default function Tabs({ activeTab, onChange }: Props) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button
        data-testid="tab-create"
        onClick={() => onChange("create")}
        style={{
          fontWeight: activeTab === "create" ? "bold" : "normal",
        }}
      >
        Create User
      </button>

      <button
        data-testid="tab-list"
        onClick={() => onChange("list")}
        style={{
          marginLeft: 10,
          fontWeight: activeTab === "list" ? "bold" : "normal",
        }}
      >
        User List
      </button>
    </div>
  );
}