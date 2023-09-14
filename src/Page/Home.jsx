import { Link, useLocation } from "react-router-dom";
import getAllCourses from "../Hooks/getAllCourses";
import Layout from "../Component/Layout";
import Box from "../Component/Box";
import { Alert } from "@material-tailwind/react";

const Home = () => {
  const { state } = useLocation();
  const { courses, isLoading, isError } = getAllCourses();
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>there was an error</h1>;

  return (
    <Layout>
      {state?.new && (
        <Alert color="green" className="my-5">
          New Course Added
        </Alert>
      )}
      {state?.delete && (
        <Alert color="red" className="my-5">
          Course Deleted
        </Alert>
      )}
      <div className="grid grid-cols-3 gap-y-12 gap-x-4	pt-5">
        {courses.map((course) => {
          return <Box key={course.id} {...course} />;
        })}
      </div>
    </Layout>
  );
};
export default Home;
