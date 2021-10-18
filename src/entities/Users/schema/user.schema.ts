import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
	@Field(() => ID)
	_id: number;

	@Prop({ type: String })
	@Field()
	public name: string;

	@Prop({ type: String, unique: true })
	@Field()
	public email: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
	@Field(() => [User])
	public friends: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
