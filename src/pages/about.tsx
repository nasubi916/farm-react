import { useStore } from "@nanostores/react";
import { type ReactElement } from "react";
import { $user } from "@/stores/user";

export function About(): ReactElement {
  const user = useStore($user);
  console.log(user);
  return <>About :</>
}
