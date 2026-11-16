import {MonsterI} from "./Monster";

export interface BestiaryI {
    name: string;
    description: string;
    tags: string[];
    monsters: MonsterI[];
}