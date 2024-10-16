import { useStore } from "@nanostores/react";
import { type ReactElement } from "react";
import { $users } from "@/stores/useUser";
import { type User } from "@/types/user";

export function About(): ReactElement {
  const users: User[] = useStore($users);
  return (
    <div>
      <h1>About</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
