import { type FC } from "react";
import { useRef } from "react";

type NewGoalProps = {
  onAddGoal: (title: string, description: string) => void; 
}
;

const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {
  const title = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredTitle = title.current?.value;
    const enteredSummary = summary.current?.value;
    onAddGoal(enteredTitle || "", enteredSummary || "");
    event.currentTarget.reset(); 
  };  

  return (
    <div>
      <h2>Add a New Goal</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={title}/>
        </p>
        <p>
          <label htmlFor="summary">Description</label>
          <input id="summary" type="text" ref={summary}></input>
        </p>
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default NewGoal;