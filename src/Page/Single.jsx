import { useNavigate, useParams } from "react-router-dom";
import getOneCourse from "../Hooks/getOneCourse";
import { useRef, useState } from "react";
import putCourse from "../Hooks/putCourse";
import deleteCourse from "../Hooks/deleteCourse";

const Single = () => {
  const navigate = useNavigate();
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(null);

  const { id } = useParams();
  const { course, isLoading, isError } = getOneCourse(id, isUpdateSuccess);

  const updateForm = useRef();
  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const payload = {
      name: updateForm.current.name.value,
    };
    const isDone = await putCourse(id, payload);
    if (isDone) setIsUpdateSuccess(true);
    else setIsUpdateSuccess(false);
  };
  const handleDeleteCourse = async () => {
    const isDone = await deleteCourse(id);
    navigate("/", { message: "delete was successful" });
  };

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>there was an error</h1>;
  return (
    <div>
      {JSON.stringify(course)}
      <hr />
      <form ref={updateForm} onSubmit={handleUpdateForm}>
        <input type="text" name="name" />
        <button type="submit">submit</button>
      </form>
      {isUpdateSuccess ? <h1>updated</h1> : <h1>cant update</h1>}
      <hr />
      <button onClick={handleDeleteCourse}>delete course</button>
    </div>
  );
};

export default Single;
