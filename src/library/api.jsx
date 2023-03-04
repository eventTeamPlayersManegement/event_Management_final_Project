const baseUrl = "https://final-project-backend-lkvb.onrender.com/api";

export const getPath = async (path) => {
  try {
    let urlGetAll = `${baseUrl}/${path}`;

    const response = await fetch(urlGetAll);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
export const checkProfile = async () => {
  const res = await fetch("http://localhost:3000/profile", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "include",
  });

  return await res.json();
};
