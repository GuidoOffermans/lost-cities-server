import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Game, GameSchema } from './schema/game.schema';
import { GamesService } from './games.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }])],
	controllers: [],
	providers: [GamesService],
	exports: [GamesService],
})
export class GamesModule {}
