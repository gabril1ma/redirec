function Answer(props) {
    return (
        <div
            className="bg-gray-100 dark:bg-gray-100 mx-6 h-16 w-auto mb-4 rounded-md flex items-center"
            onClick={() => props.onClick(props.answer)}
        >
            <input
                type="radio"
                name="answer"
                value={props.answer}
                className="ml-5 dark:ml-5"
            />
            <label className="text-gray-700 dark:text-gray-700 text-lg ml-4">
                {props.answer}
            </label>
        </div>
    );
}

function AnswerCard(props) {
    return (
        <div className="bg-gray-50 dark:bg-gray-50 shadow-lg dark:shadow-lg rounded-2xl min-w-80 w-148 resp bot animate__pulse ans" style={{ outline: "0.125rem solid hotpink" }}>
            <div className="pt-6 pb-2" >
                {props.answers.map(answer => (
                    <Answer
                        key={answer}
                        answer={answer}
                        onClick={props.onClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default AnswerCard;
