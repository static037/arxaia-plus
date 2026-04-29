export interface Answers {
	a: Answer;
	b: Answer;
	c: Answer;
	d: Answer;
}

export interface Answer {
	text: string;
	isCorrect?: boolean;
}
