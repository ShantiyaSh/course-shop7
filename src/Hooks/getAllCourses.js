import { useEffect, useState } from "react";

const getAllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://6501cae8736d26322f5c4b91.mockapi.io/courses")
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
