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

// we are checking wich user is logged with :
export const checkProfile = async () => {
  const res = await fetch(`${baseUrl}/profile`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "include",
  });

  return await res.json();
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
