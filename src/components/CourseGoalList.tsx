import { type FC } from "react"
import {type CourseGoalComponentProps} from "./CourseGoal.tsx";
import CourseGoal from "./CourseGoal.tsx";

type CourseGoalListProps = {
  goals: CourseGoalComponentProps[];
  onDelete: (id: string) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDelete }) => {
  return (
    <section>
      <ul>
        {goals.map((goal, index) => 
          <li key={`${goal.id}-${index}--item`}>
            <CourseGoal 
              id={goal.id}
              title={goal.title} 
              description={goal.description} 
              onDelete={onDelete}
            />
          </li>
        )}
      </ul>
    </section>
  )
}

export default CourseGoalList;