import Layout from "../../components/Layout"
import Link from "next/link"

const ExercisesPage = () => {
  const exercises = [{ id: "1", name: "chest exercise" }]
  return (
    <Layout>
      <h1>Exercises</h1>
      <p>
        List of exercise cards should go here with a filter to search by type,
        name, intensity etc
      </p>
      <ul>
        {exercises.map(exercise => (
          <li>
            <Link href={`/exercises/${exercise.id}`}>
              <a>{exercise.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/exercises/new">
        <a>New Exercise</a>
      </Link>
    </Layout>
  )
}

export default ExercisesPage
