const putCourse = async (id, payload) => {
  const url = `https://6501cae8736d26322f5c4b91.mockapi.io/courses/${id}`;
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
  } catch (error) {
    return false;
  }
  return true;
};
export default putCourse;
