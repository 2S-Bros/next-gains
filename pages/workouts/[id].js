import { useState } from "react"
import Layout from "../../components/Layout"
import WorkoutForm from "../../components/WorkoutForm"

const WorkoutPage = () => {
  const [isUpdating, setIsUpdating] = useState(false)

  const workout = {
    name: "chest workout",
    intensity: 3,
    description: "pump your chest up",
    exercises: ["pushup", "incline bench", "bench"]
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
        <WorkoutForm
          workout={workout}
          cancelAction={cancelAction}
          onSubmit={onSubmit}
        />
      ) : (
        <>
          <h1>{workout.name}</h1>
          <p>Intensity: {workout.intensity}</p>
          <p>{workout.description}</p>
          <ul>
            {workout.exercises.map(exercise => (
              <li>{exercise}</li>
            ))}
          </ul>
          <button onClick={() => setIsUpdating(true)}>Update</button>
        </>
      )}
    </Layout>
  )
}

export default WorkoutPage
