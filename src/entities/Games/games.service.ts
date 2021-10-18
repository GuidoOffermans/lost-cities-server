import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game, GameDocument } from './schema/game.schema';
// import { CreateUserDto } from './dto/create-cat.dto';

@Injectable()
export class GamesService {
	constructor(@InjectModel(Game.name) private userModel: Model<GameDocument>) {}

	async create(createUserDto): Promise<Game> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	}

	async findAll(): Promise<Game[]> {
		return this.userModel.find().exec();
	}
}
