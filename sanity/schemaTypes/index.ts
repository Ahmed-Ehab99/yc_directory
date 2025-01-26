import { type SchemaTypeDefinition } from "sanity";
import { author } from "./authour";
import { startup } from "./startup";
import { playList } from "./playList";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playList],
};
