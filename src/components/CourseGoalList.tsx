import { type FC, type ReactNode } from "react"
import {type CourseGoalComponentProps} from "./CourseGoal.tsx";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: CourseGoalComponentProps[];
  onDelete: (id: string) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDelete }) => {
  let warningBox: ReactNode | null = null;
  
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        No goals found. Start adding some!
      </InfoBox>
    );
  }
  
  if (goals.length > 8) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have too many goals. Slow your roll!
      </InfoBox>
    );
  }
  if (goals.length >6 && goals.length <= 8) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You have more than 6 goals! That's probably too many.
      </InfoBox>
    );
  }
  if (goals.length >=4  && goals.length <= 6) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You have more than 3 goals! Consider focusing on fewer goals at a time.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
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
    </>
  )
}

export default CourseGoalList;