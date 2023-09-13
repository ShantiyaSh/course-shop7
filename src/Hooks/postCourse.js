const postCourse = async (payload) => {
  const url = `https://6501cae8736d26322f5c4b91.mockapi.io/courses`;
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
  } catch (error) {
    return false;
  }
  return true;
};
export default postCourse;
