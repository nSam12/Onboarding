import { AnswerType, Question, AnswerWithOptions } from "../QuestionTypes";
import "./QuestionStep.css";

export interface QuestionStepProps{
    ques: Question;
}

const QuestionStep = (props: QuestionStepProps) => {
    let t;
    if (props.ques.answer.answerType === AnswerType.YESNO) {
        t = (
            <div>
                {" "}
                Выберите ответ<button>Да</button> <button>Нет</button>
            </div>
        );
    } else if (props.ques.answer.answerType === AnswerType.FREETEXT) {
        t = (
            <div>
                {" "}
                Введите ответ <input placeholder="ответ"></input>
            </div>
        );
    } else if (props.ques.answer.answerType === AnswerType.GRADE) {
        t = (
            <div>
                {" "}
                Введите число от 0 до 10 <input placeholder="0-10"></input>{" "}
            </div>
        );
    } else if (props.ques.answer.answerType === AnswerType.MULTANSWER) {
        //ques.answer.answer
        const list = props.ques.answer.answer.options.map((elem) => <div>{elem} <input type={"checkbox"}></input></div>  )
        t = <div className="QuestionStepCheckBoxesBox"> Выберите варианты 
            {list}
        </div>;
    } else {
        t = <div> NO </div>;
    }


    return (
        <div className="QuestionStepBox">
            <div className="QuestionStepHeadingBox">
                <h1 className="QuestionStepBoxHeading">{props.ques.question}</h1>
            </div>
            {t}
        </div>
    );
};

export default QuestionStep;
