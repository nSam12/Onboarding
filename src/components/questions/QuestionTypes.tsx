


export interface Questions{
    id: string;
    name: string;
    questions: Question[];
}

export interface Question{
    id: string;
    question: string;
    answer: Answer;
}

export enum AnswerType{
    YESNO = "YESNO",
    GRADE = "GRADE",
    FREETEXT = "FREETEXT",
    MULTANSWER = "MULTANSWER",
}

export interface YesNoAnswer{
    answerType: AnswerType.YESNO,
    answer: boolean,
}

export interface GradeAnswer{
    answerType: AnswerType.GRADE,
    answer: number,
}

export interface FreeTextAnswer{
    answerType: AnswerType.FREETEXT,
    answer: string,
}

export interface AnswerWithOptions{
    options: string[],
    answerID: number
}

export interface MultipleAnswer{
    answerType: AnswerType.MULTANSWER,
    answer: AnswerWithOptions
}
export type Answer = YesNoAnswer | GradeAnswer | FreeTextAnswer | MultipleAnswer;

