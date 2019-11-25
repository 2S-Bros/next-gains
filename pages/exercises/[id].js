import Layout from "../../components/Layout"
import ExerciseForm from "../../components/ExerciseForm"
import Link from "next/link"

const ExercisePage = () => {
  const exercise = { name: "chest exercise" }
  return (
    <Layout>
      <h1>{exercise.name}</h1>
      <ExerciseForm exercise={exercise} />
    </Layout>
  )
}

export default ExercisePage
