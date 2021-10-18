import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Room, RoomSchema } from './schema/room.schema';
import { RoomsService } from './rooms.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])],
	controllers: [],
	providers: [RoomsService],
	exports: [RoomsService],
})
export class RoomsModule {}
