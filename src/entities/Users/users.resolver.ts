import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
	constructor(private usersService: UsersService) {}

	@Query(() => [User])
	async users() {
		return await this.usersService.findAll();
	}

	@Mutation(() => User)
	async createUser(@Args('input') input: CreateUserDto) {
		return this.usersService.create(input);
	}

	// @ResolveField('posts')
	// async getPosts(@Parent() author) {
	// 	const { id } = author;
	// 	return this.usersService.findAll({ authorId: id });
	// }
}
