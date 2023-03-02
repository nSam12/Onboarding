import QuestionsForm from "../../../../../components/questions/QuestionsForm/QuestionsForm";
import {
    AnswerType,
    Question,
    Questions,
} from "../../../../../components/questions/QuestionTypes";
import "./QuestionModal.css";

const q1: Question = {
    id: "1",
    question:
        "Что мешает Вам рекомендовать компанию друзьям?",
    answer: { answerType: AnswerType.FREETEXT, answer: "" },
};

const q2: Question = {
    id: "2",
    question: "Вы четко понимаете основные ценности компании?",
    answer: { answerType: AnswerType.YESNO, answer: false },
};

const q3: Question = {
    id: "3",
    question: "Оцените по шкале от 0 до 10, насколько вы счастливы на работе?",
    answer: { answerType: AnswerType.GRADE, answer: 0 },
};

const q4: Question = {
    id: "4",
    question: "Вы знаете, к кому обратиться на работе в случае проблемы?",
    answer: {answerType: AnswerType.MULTANSWER, answer: {options:["да", "нет"], answerID: 0}}
}

const Q: Questions = {
    id: "1",
    name: "Пульс-опрос",
    questions: [q1, q2, q3, q4],
};

const QuestionModal = (props:any) => {
    const Questions: Questions = Q;
    return (
        <div className="QuestionModal">
            <QuestionsForm questions={Q} closeModal={props.closeModal} ></QuestionsForm>
        </div>
    );
};

export default QuestionModal;
