import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomDocument } from './schema/room.schema';
// import { CreateUserDto } from './dto/create-cat.dto';

@Injectable()
export class RoomsService {
	constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

	async create(createUserDto): Promise<Room> {
		const createdRoom = new this.roomModel(createUserDto);
		return createdRoom.save();
	}

	async findAll(): Promise<Room[]> {
		return this.roomModel.find().exec();
	}

	async findOne(findObject): Promise<Room> {
		return this.roomModel.findOne(findObject);
	}
}
