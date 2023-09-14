import { useNavigate, useParams } from "react-router-dom";
import getOneCourse from "../Hooks/getOneCourse";
import { useEffect, useRef, useState } from "react";
import putCourse from "../Hooks/putCourse";
import deleteCourse from "../Hooks/deleteCourse";
import Layout from "../Component/Layout";
import {
  Alert,
  Button,
  Card,
  Carousel,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const Single = () => {
  const navigate = useNavigate();
  const [isUpdateSuccess, setIsUpdateSuccess] = useState({
    status: "not update",
  });

  const { id } = useParams();
  useEffect(() => {});
  const { course, isLoading, isError } = getOneCourse(id, isUpdateSuccess);

  const updateForm = useRef();
  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const payload = {
      name: updateForm.current.name.value,
      teacher: updateForm.current.teacher.value,
      description: updateForm.current.description.value,
      price: updateForm.current.price.value,
      avatar: updateForm.current.avatar.files[0],
    };
    const isDone = await putCourse(id, payload);
    if (isDone) {
      window.scrollTo(0, 0);
      setIsUpdateSuccess({
        status: "updated",
      });
    } else {
      window.scrollTo(0, 0);

      setIsUpdateSuccess({
        status: "not update",
      });
    }
  };
  const handleDeleteCourse = async () => {
    const isDone = await deleteCourse(id);
    navigate("/", { state: { delete: true } });
  };

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>there was an error</h1>;

  const { name, teacher, price, description, avatar } = course;
  return (
    <Layout className="w-3/4 mx-auto mt-5">
      {isUpdateSuccess.status == "updated" && (
        <Alert color="green" className="mt-5">
          Your course updated
        </Alert>
      )}
      <Carousel transition={{ duration: 2 }} className="rounded  mt-8">
        <img
          src="/img/1.webp"
          alt={name}
          className="h-full w-full object-cover"
        />
        <img
          src="/img/2.webp"
          alt={name}
          className="h-full w-full object-cover"
        />
      </Carousel>
      <Typography variant="h1">
        <span>{name}</span>
      </Typography>
      <Typography variant="h2">Teacher : {teacher}</Typography>
      <Typography variant="h3">Price: {price}</Typography>
      <Typography variant="h4">Summery: {description}</Typography>
      <Button onClick={handleDeleteCourse} color="red" className="my-3">
        Delete Course
      </Button>
      <hr />

      <Card color="transparent" className="w-1/2 mx-auto border p-5 my-10">
        <Typography variant="h4" color="blue-gray">
          Update Course
        </Typography>
        <form
          className="flex flex-col gap-5 mt-5"
          ref={updateForm}
          onSubmit={handleUpdateForm}
        >
          <Input label="Name" type="text" name="name" required />
          <Input label="teacher" type="text" name="teacher" required />
          <Textarea
            label="Summery"
            type="text"
            name="description"
            rows="3"
            required
          />
          <Input label="Price" type="number" name="price" required />

          <label htmlFor="Image-input" className="w-full border p-4">
            Upload Image
          </label>
          <input
            style={{ display: "none" }}
            id="Image-input"
            label="Image"
            type="file"
            name="avatar"
          />
          <Button className="mt-6" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </Layout>
  );
};

export default Single;
