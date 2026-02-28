type Props = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({ isOpen, onConfirm, onCancel }: Props) {
  if (!isOpen) return null;

  return (
    <div
      data-testid="confirm-modal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 8,
          minWidth: 300,
        }}
      >
        <p data-testid="confirm-text">
          Are you sure you want to delete this user?
        </p>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button
            data-testid="cancel-delete"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            data-testid="confirm-delete"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}