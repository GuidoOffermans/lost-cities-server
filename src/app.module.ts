import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppGateway } from './app.gateway';
import { GamesModule } from './entities/Games/games.module';
import { RoomsModule } from './entities/Rooms/rooms.module';
import { UsersModule } from './entities/Users/users.module';

@Module({
	imports: [
		MongooseModule.forRoot(''),
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			sortSchema: true,
		}),
		UsersModule,
		RoomsModule,
		GamesModule,
	],
	controllers: [AppController],
	providers: [AppGateway],
})
export class AppModule {}
