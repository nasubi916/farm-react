import { atom } from "nanostores";
import { type User } from "@/types/user";

export const $users = atom<User[]>([]);
