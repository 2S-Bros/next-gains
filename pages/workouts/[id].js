import Layout from "../../components/Layout"
import WorkoutForm from "../../components/WorkoutForm"

const WorkoutPage = () => {
  const workout = { name: "chest workout" }
  return (
    <Layout>
      <h1>{workout.name}</h1>
      <WorkoutForm workout={workout} />
    </Layout>
  )
}

export default WorkoutPage
