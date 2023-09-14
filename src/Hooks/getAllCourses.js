import { useEffect, useState } from "react";

const getAllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/ShantiyaSh/db.json/courses")
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
          return;
        }
        return response.json();
      })
      .then((json) => setCourses(json))
      .catch(() => setIsError(true));
    setIsLoading(false);
  }, []);
  return { courses, isLoading, isError };
};
export default getAllCourses;
