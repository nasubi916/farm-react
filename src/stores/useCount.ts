import { atom } from "nanostores";
import { type User } from "@/types";

export const $users = atom<User[]>([]);
