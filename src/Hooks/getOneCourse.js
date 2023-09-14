import { useEffect, useState } from "react";

const getOneCourse = (id, isUpdateSuccess) => {
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/ShantiyaSh/db.json/courses/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
          return;
        }
        return response.json();
      })
      .then((json) => setCourse(json))
      .catch(() => setIsError(true));
    setIsLoading(false);
  }, [isUpdateSuccess]);

  return { course, isLoading, isError };
};

export default getOneCourse;
