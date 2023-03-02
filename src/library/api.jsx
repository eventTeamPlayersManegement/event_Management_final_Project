const baseUrl = "https://final-project-backend-lkvb.onrender.com/api";

// export const getPhotographer = async () => {
//     try {
//         let urlGetAll = `${baseUrl}/photographer`

//         const response = await fetch(urlGetAll);
//         const data = await response.json();

//         return data;
//     } catch (error) {
//         console.error(error);
//         return
//     }
// }

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
