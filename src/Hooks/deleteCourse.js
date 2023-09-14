const deleteCourse = async (id) => {
  const url = `https://my-json-server.typicode.com/ShantiyaSh/db.json/courses/${id}`;
  const headers = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, headers);
    if (!response.ok) return false;
    const json = await response.json();
    console.log(json);
  } catch (error) {
    return false;
  }
  return true;
};
export default deleteCourse;
