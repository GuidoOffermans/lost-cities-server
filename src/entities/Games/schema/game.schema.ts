import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Room } from 'src/entities/Rooms/schema/room.schema';

export type GameDocument = Game & Document;

@Schema()
export class Game {
	@Prop()
	public id: string;

	// @Prop()
	// public Room: Room;

	// @Prop()
	// public deck: [];
}

export const GameSchema = SchemaFactory.createForClass(Game);
