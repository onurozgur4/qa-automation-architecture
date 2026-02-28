type Props = {
  id: number;
  name: string;
  email?: string;
  onDelete: (id: number) => void;
};

export default function UserItem({ id, name, email, onDelete }: Props) {
  return (
    <div
      data-testid={`user-row-${id}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 8,
        borderBottom: "1px solid #ccc",
      }}
    >
      <div>
        <div>{name}</div>
        <div style={{ fontSize: 12, color: "#666" }}>{email}</div>
      </div>

      <button
        data-testid={`delete-btn-${id}`}
        onClick={() => onDelete(id)}
      >
        🗑
      </button>
    </div>
  );
}