import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Game } from 'src/entities/Games/schema/game.schema';
import { User } from 'src/entities/Users/schema/user.schema';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
	@Prop({ type: String, unique: true })
	public name: string;

	@Prop()
	public users: User[];

	@Prop()
	public game: Game;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
