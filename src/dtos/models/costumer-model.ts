import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Costumer {
  @Field()
  name: string;
}
