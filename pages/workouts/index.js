import Layout from "../../components/Layout"
import Link from "next/link"

const WorkoutsPage = () => {
  const workouts = [
    {
      id: "w1",
      name: "chest workout",
      intensity: 3,
      description: "pump your chest up",
      exercises: ["pushup", "incline bench", "bench"]
    }
  ]
  return (
    <Layout>
      <h1>Workouts</h1>
      <p>
        List of workout cards should go here with a filter to search by type,
        name, intensity etc
      </p>
      <ul>
        {workouts.map(workout => (
          <li>
            <Link href={`/workouts/${workout.id}`}>
              <a>{workout.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/workouts/new">
        <a>New Workout</a>
      </Link>
    </Layout>
  )
}

export default WorkoutsPage
