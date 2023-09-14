const postCourse = async (payload) => {
  const url = `https://my-json-server.typicode.com/ShantiyaSh/db.json/courses`;
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
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
export default postCourse;
