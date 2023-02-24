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
        "Есть ли что-то, что мешает вам рекомендовать компанию своим друзьям как хорошее место для работы?",
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
    question: "Когда происходит что-то плохое на работе, знаете ли вы, к кому обратиться за помощью?",
    answer: {answerType: AnswerType.MULTANSWER, answer: {options:["да", "скорее да", "нет", "скорее нет"], answerID: 0}}
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
            <h1>{Questions.name}</h1>
            <QuestionsForm questions={Q} closeModal={props.closeModal} ></QuestionsForm>
        </div>
    );
};

export default QuestionModal;
