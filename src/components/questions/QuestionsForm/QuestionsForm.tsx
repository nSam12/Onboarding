import { useState } from "react";
import QuestionStep from "../QuestionStep/QuestionStep";
import { Question, Questions } from "../QuestionTypes";
import "./QuestionsForm.css";

export interface QuestionProps {
    questions: Questions;
    closeModal: () => {};
}

const QuestionsForm = ({ questions, closeModal }: QuestionProps) => {
    const IndxLen = questions.questions.length;
    const [quesIndx, setQuesIndx] = useState<number>(0);

    console.log("In QuestionForm", questions.questions);

    const End = () => {
        closeModal();
    };

    const incIndx = () => {
        if (quesIndx < IndxLen - 1) {
            setQuesIndx(quesIndx + 1);
        }
    };

    const decIndx = () => {
        if (quesIndx > 0) {
            setQuesIndx(quesIndx - 1);
        }
    };
    return (
        <div>
            <QuestionStep ques={questions.questions[quesIndx]}></QuestionStep>
            <h1>
                Номер вопроса {quesIndx + 1} из {IndxLen}
            </h1>

            <button onClick={decIndx}> Предыдущий вопрос</button>
            <button onClick={incIndx}> Следующий вопрос</button>
            {quesIndx === IndxLen - 1 && (
                <button onClick={End}>Завершить опрос</button>
            )}
            <h2></h2>
            <button onClick={closeModal}> Закрыть</button>
        </div>
    );
};

export default QuestionsForm;
