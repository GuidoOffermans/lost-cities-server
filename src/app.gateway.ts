import {
	WebSocketGateway,
	SubscribeMessage,
	MessageBody,
	ConnectedSocket,
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Inject, Logger } from '@nestjs/common';

import { RoomsService } from './entities/Rooms/rooms.service';

@WebSocketGateway({ cors: true })
export class AppGateway
	implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
	constructor(private roomsService: RoomsService) {}

	@WebSocketServer() io: Server;
	private logger: Logger = new Logger('AppGateway');

	async afterInit(server: any) {
		const mainRoom = await this.roomsService.findOne({ name: 'mainRoom' });
		this.logger.log(`mainRoom: ${mainRoom}`);

		if (!mainRoom) this.roomsService.create({ name: 'mainRoom' });

		const rooms = await this.roomsService.findAll();
		this.logger.log(`rooms: ${rooms}`);
	}

	handleDisconnect(client: any) {
		this.logger.log(`Client disconnected: ${client.id}`);
	}

	handleConnection(client: any, ...args: any[]): void {
		this.logger.log(`Client connected: ${client.id}`);
		this.io.emit('CardEvents', `Hello ${client.id}`);
	}

	@SubscribeMessage('CardEvents')
	async create(
		@MessageBody() createCardEventDto,
		@ConnectedSocket() client: Socket
	): Promise<void> {
		this.logger.log('hellloooo', createCardEventDto);
		this.io.emit('CardEvents', 'messssage');
	}
}
