import config from "../content/data.json";

export const getPath = async (path) => {
  try {
    let urlGetAll = `${config.baseURL}/api/${path}`;

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
  const res = await fetch(`${config.baseURL}/profile`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json; charset=UTF-8",
    },
    credentials: "include",
  });
  return await res.json();
};

export const getWriterOnSub = async (id) => {
  const res = await fetch(`${config.baseURL}/api/users/sub/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json; charset=UTF-8",
    },
    credentials: "include",
  });
  return await res.json();
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
