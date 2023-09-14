import { useRef, useState } from "react";
import postCourse from "../Hooks/postCourse";
import Layout from "../Component/Layout";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const NewCourse = () => {
  const navigate = useNavigate();

  const form = useRef();
  const handleForm = async (e) => {
    e.preventDefault();
    console.log();
    const payload = {
      name: form.current.name.value,
      author: form.current.name.author,
      description: form.current.name.description,
      price: form.current.name.price,
      avatar: e.target.avatar.files[0],
    };
    const result = await postCourse(payload);
    if (result) {
      navigate("/", { state: { new: true } });
    }
  };
  return (
    <Layout>
      <Card color="transparent" className="w-1/2 mx-auto border p-5 my-10">
        <Typography variant="h4" color="blue-gray">
          Publish New Course
        </Typography>
        <form
          className="flex flex-col gap-5 mt-5"
          ref={form}
          onSubmit={handleForm}
        >
          <Input label="Name" type="text" name="name" required />
          <Input label="Author" type="text" name="author" required />
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
export default NewCourse;
