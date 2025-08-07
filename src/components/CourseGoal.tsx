import { type FC } from "react"

export type CourseGoalComponentProps = {
  id: string;
  title: string;  
  description: string;
  onDelete: (id: string) => void;
}

const CourseGoal: FC<CourseGoalComponentProps> = ({title, description, id, onDelete}) => { 
  return (
  <article id={id}>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <button onClick={() => onDelete(id)}>Delete</button>
  </article>
  )
}

export default CourseGoal;