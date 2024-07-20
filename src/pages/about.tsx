import { useStore } from "@nanostores/react";
import { type ReactElement } from "react";
import { $users } from "@/stores/useUser";

export function About(): ReactElement {
  const users = useStore($users);
  return <>About : {users.map((user) => user)}</>;
}
