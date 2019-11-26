import { useState } from "react"

const WorkoutForm = (workout, onSubmit, cancelAction) => {
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

  return (
    <form action={onSubmit}>
      <label htmlFor="workout-name">
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

      <label htmlFor="workout-description">
        <span>Description</span>
        <textarea
          id="workout-description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        {description}
      </label>

      {exercises && (
        <>
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
        </>
      )}

      <button type="submit">Create Workout</button>
      <button type="button" onClick={cancelAction}>
        Cancel
      </button>
    </form>
  )
}

export default WorkoutForm
