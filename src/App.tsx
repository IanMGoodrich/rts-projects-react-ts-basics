import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import { seedGenerator } from "./utilities/SeedGenerator.tsx";
import { type FC } from "react"
import {type CourseGoalComponentProps } from "./components/CourseGoal.tsx";


const App:FC = ()=> {
  const [goals, setGoals ] = useState<CourseGoalComponentProps[]>([]);
  
  const handleAddGoal = (title: string, description: string) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      {
        id: seedGenerator(),
        title: title,
        description: description,
        onDelete: (id: string) => handleDeleteGoal(id)
      }
    ]);
  }

  const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <p>Learn it from the ground up</p>  
      <h2>Course Goals</h2>
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal}/>
    </main>
  )
}

export default App;