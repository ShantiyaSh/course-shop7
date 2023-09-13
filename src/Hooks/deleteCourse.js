const deleteCourse = async (id) => {
  const url = `https://6501cae8736d26322f5c4b91.mockapi.io/courses/${id}`;
  const headers = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, headers);
    if (!response.ok) return false;
  } catch (error) {
    return false;
  }
  return true;
};
export default deleteCourse;
