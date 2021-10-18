import { Injectable } from '@nestjs/common';

interface Card {
	color: string;
	value: string;
}

const cardValues = ['🤝', '🤝', '🤝', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const colors = ['red', 'blue', 'yellow', 'white', 'green'];

@Injectable()
export class CardEventsService {
	createNewDeck(): Card[] {
		return colors.flatMap((color) => {
			return cardValues.map((value) => {
				return { color, value };
			});
		});
	}

	shuffle(deck: Card[]): Card[] {
		for (let i = deck.length - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1));
			const oldValue = deck[i];
			deck[i] = deck[newIndex];
			deck[newIndex] = oldValue;
		}

		return deck;
	}

	draw(currentDeck: Card[], number = 1): Card[] {
		const drawnCards: Card[] = [];
		for (let i = number; i > 0; i--) {
			drawnCards.push(currentDeck.pop() as Card);
		}
		return drawnCards;
	}
}
