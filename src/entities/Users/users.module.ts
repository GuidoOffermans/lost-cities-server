import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from './schema/user.schema';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
	controllers: [],
	providers: [UsersService, UsersResolver],
	exports: [UsersService],
})
export class UsersModule {}
