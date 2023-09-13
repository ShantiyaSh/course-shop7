import { useEffect, useState } from "react";

const getAllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://react-task-8dd8e-default-rtdb.firebaseio.com/")
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
          return;
        }
        return response.json();
      })
      .then((json) => setCourses(json))
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
    setIsLoading(false);
  }, []);

  return { courses, isLoading, isError };
};
export default getAllCourses;
