import { useState } from "react"
import Layout from "../../components/Layout"
import ExerciseForm from "../../components/ExerciseForm"

const ExercisePage = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const exercise = {
    name: "chest exercise",
    intensity: 3,
    description: "push up and down"
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log("submitted")
    setIsUpdating(false)
  }

  const cancelAction = () => {
    console.log("cancelled")
    setIsUpdating(false)
  }

  return (
    <Layout>
      {isUpdating ? (
        <ExerciseForm
          exercise={exercise}
          cancelAction={cancelAction}
          onSubmit={onSubmit}
        />
      ) : (
        <>
          <h1>{exercise.name}</h1>
          <p>Intensity: {exercise.intensity}</p>
          <p>{exercise.description}</p>
          <button onClick={() => setIsUpdating(true)}>Update</button>
        </>
      )}
    </Layout>
  )
}

export default ExercisePage
