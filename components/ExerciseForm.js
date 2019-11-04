import { useState } from "react"

const ExerciseForm = () => {
  const [name, setName] = useState((exercise && exercise.name) || "")
  const [intensity, setIntensity] = useState(
    (exercise && exercise.intensity) || 1
  )
  const [description, setDescription] = useState(
    (exercise && exercise.description) || ""
  )

  const submit = () => {
    console.log("submitted")
  }

  return (
    <Layout>
      <form action={submit}>
        <label for="exercise-name">
          <span>Name</span>
          <input
            id="exercise-name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Intensity</span>
          <input
            id="exercise-intensity-number"
            type="number"
            value={intensity}
            onChange={e => setIntensity(e.target.value)}
            min="1"
            max="4"
          />
          <input
            id="exercise-intensity-range"
            type="range"
            onChange={e => setIntensity(e.target.value)}
            value={intensity}
            min="1"
            max="4"
          />
        </label>

        <label for="exercise-description">
          <span>Description</span>
          <textarea
            id="exercise-description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {description}
        </label>

        {!exercise && <button class="submit">Create Exercise</button>}
      </form>
    </Layout>
  )
}

export default ExerciseForm
