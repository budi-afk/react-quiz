import Options from "./Options";

function Questions({ questions }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options options={questions.options} />
    </div>
  );
}

export default Questions;
