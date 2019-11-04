import { useState } from "react"

const WorkoutForm = () => {
  const [name, setName] = useState((workout && workout.name) || "")
  const [intensity, setIntensity] = useState(
    (workout && workout.intensity) || 1
  )
  const [description, setDescription] = useState(
    (workout && workout.description) || ""
  )
  const [exercises, setExercises] = useState(
    (workout && workout.exercises) || []
  )

  const submit = () => {
    console.log("submitted")
  }

  return (
    <Layout>
      <form action={submit}>
        <label for="workout-name">
          <span>Name</span>
          <input
            id="workout-name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Intensity</span>
          <input
            id="workout-intensity-number"
            type="number"
            value={intensity}
            onChange={e => setIntensity(e.target.value)}
            min="1"
            max="4"
          />
          <input
            id="workout-intensity-range"
            type="range"
            onChange={e => setIntensity(e.target.value)}
            value={intensity}
            min="1"
            max="4"
          />
        </label>

        <label for="workout-description">
          <span>Description</span>
          <textarea
            id="workout-description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {description}
        </label>

        <h4>Exercises</h4>
        {exercises.map(exercise => (
          <label>
            <input
              type="checkbox"
              group={exercises}
              value={exercise}
              onChange={e => setExercises(e.target.value)}
            />
            {exercise.name}
          </label>
        ))}

        {!workout && <button class="submit">Create Exercise</button>}
      </form>
    </Layout>
  )
}

export default WorkoutForm
