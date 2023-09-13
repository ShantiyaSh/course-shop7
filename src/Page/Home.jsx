import { Link } from "react-router-dom";
import getAllCourses from "../Hooks/getAllCourses";

const Home = () => {
  const { courses, isLoading, isError } = getAllCourses();
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>there was an error</h1>;
  return (
    <div>
      {courses.map(({ id, name }) => {
        return (
          <p key={id}>
            <Link to={`./${id}`}>{name}</Link>
          </p>
        );
      })}
    </div>
  );
};
export default Home;
