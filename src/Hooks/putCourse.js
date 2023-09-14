const putCourse = async (id, payload) => {
  const url = `https://my-json-server.typicode.com/ShantiyaSh/db.json/courses/${id}`;
  const headers = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
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
export default putCourse;
