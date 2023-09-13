import { Link } from "react-router-dom";
import getAllCourses from "../Hooks/getAllCourses";
import Layout from "../Component/Layout";

const Home = () => {
  const { courses, isLoading, isError } = getAllCourses();
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>there was an error</h1>;
  return (
    <Layout>
      {courses.map(({ id, name }) => {
        return (
          <p key={id}>
            <Link to={`./${id}`}>{name}</Link>
          </p>
        );
      })}
    </Layout>
  );
};
export default Home;
