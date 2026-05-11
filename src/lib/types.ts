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

interface Source {
	chapter: number;
	verse: number;
}

interface Citation {
	pre: string;
	highlighted: string;
	post: string;
	source: Source;
}

export interface Question {
	difficulty: 'easy' | 'medium' | 'hard';
	type: 'multiple-choice' | 'completion';
	prompt: string;
	answers: Answers;
	citation: Citation;
	book: 'xenophon' | 'thucydides';
}

// use extends
