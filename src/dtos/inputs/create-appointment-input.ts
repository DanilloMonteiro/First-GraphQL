import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @Field()
  costumerId: String;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
