import { atom } from "nanostores";
import { User } from "@/types/user";

export const $users = atom<User[]>([]);

export function addUser(user: User): void {
  $users.set([...$users.get(), user]);
}
