import { Field, InputType } from '@nestjs/graphql';
import UserInput from './user.input';

// @InputType()
// class MessageUserConnectInput {
//   @Field()
//   readonly id: number;
// }

// @InputType()
// class MessageUserInput {
//   @Field({ nullable: true })
//   readonly connect: MessageUserConnectInput;

//   @Field({ nullable: true })
//   readonly create: UserInput;
// }

@InputType()
export default class MessageInput {
  @Field()
  readonly content: string;

  @Field()
  readonly userId: number;
}

@InputType()
export class DeleteMessageInput {
  @Field()
  readonly id: number;

  @Field()
  readonly userId: number;
}
