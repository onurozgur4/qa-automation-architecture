import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../api/userApi";
import ConfirmModal from "./ConfirmModal";
import UserItem from "./UserItem";

type User = {
  id: number;
  name: string;
  email?: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const loadUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDeleteClick = (id: number) => {
    setSelectedUserId(id);
  };

  const handleConfirmDelete = async () => {
    if (selectedUserId !== null) {
      await deleteUser(selectedUserId);
      setSelectedUserId(null);
      await loadUsers();
    }
  };

  const handleCancelDelete = () => {
    setSelectedUserId(null);
  };

  return (
    <div>
      <h2 data-testid="user-list-title">User List</h2>

      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          onDelete={handleDeleteClick}
        />
      ))}

      <ConfirmModal
        isOpen={selectedUserId !== null}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
}