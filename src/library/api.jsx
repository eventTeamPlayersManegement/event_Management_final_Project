const baseUrl = "http://localhost:4001/api";

const photographers = [
    {
        id:  "63fdd2468aef5311c47e8af2",
        name: "BBC Productions",
        fotos: [
          {
            title: "Sunset",
            url: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            id: {
              id: "63fdd2468aef5311c47e8af3"
            }
          },
          {
            title: "Love Images",
            url: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            id: {
              id: "63fdd2468aef5311c47e8af4"
            }
          },
          {
            title: "Old Town Session",
            url: "https://images.unsplash.com/photo-1550784718-990c6de52adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            id: {
              id: "63fdd2468aef5311c47e8af5"
            }
          }
        ],
        

     },
       
      
]

export const getPhotographer = async () => {
    try {
        let urlGetAll = `${baseUrl}/photographer`

        const response = await fetch(urlGetAll);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        return photographers;
    }
}
