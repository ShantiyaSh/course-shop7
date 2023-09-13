import { useRef } from "react";
import postCourse from "../Hooks/postCourse";

const NewCourse = () => {
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
  };
  return (
    <form ref={form} onSubmit={handleForm}>
      <label>name</label>
      <input type="text" name="name" />
      <label>author</label>
      <input type="text" name="author" />
      <label>description</label>
      <textarea type="text" name="description" rows="3"></textarea>
      <label>price</label>
      <input type="number" name="price" />
      <label>image</label>
      <input type="file" name="avatar" />
      <button type="submit">submit</button>
    </form>
  );
};
export default NewCourse;
