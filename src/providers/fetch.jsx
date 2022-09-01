import { useState, useEffect } from "react";

export async function useFetch() {
  const [HomePageData, setHomePageData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true);
      try {
        const response = await fetch(`/api/posts`);
        const { HomePageData } = await response.json();
        setHomePageData(HomePageData);
      } catch (err) {
        console.log("===== error =====", err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchSurvey();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
}

export async function signUpFetch(email, password) {
  const user = { email, password }; //recupération des données saisies et creation de l'objet
  console.log(user); //affichage de l'objet

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "applcation/json" },
    body: JSON.stringify(user), //mail: SyntheticBaseEvent et mdp: undefined. pourquoi
  }).then(() => {
    console.log("user créé");
  });
  return response;
}

export async function loginFetch(email, password) {
  const user = { email, password };
  console.log(user);

  fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "applcation/json" },
    body: JSON.stringify(user),
  }).then(() => {
    console.log("user connecté");
  });
}

export const submitPost = async (e) => {
  e.preventDefault();
  const tmp_date = new Date().toISOString().split("T");
  const creationDate = `${tmp_date[0]} ${tmp_date[1]}`;
  const post = { title, description, imageUrl, creationDate };

  console.log(post);
  useEffect(() => {
    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "applcation/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("post créé");
    });
  });
};
/*
export async function fetchAllPosts() {
    const [postsList, setpostsList] = useState({});
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(null);
    
      setDataLoading(true);
      try {
        const response = await fetch(`/api/posts`)
        const postsList = await response.json()
        setpostsList(postsList);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setDataLoading(false);
        return postsList
      }
    };


export async function fetchOnePost() {
  const id = new URL(window.location.href).searchParams.get("id");
  const [postsId, setpostsId] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);
  
    setDataLoading(true);
    try {
      const response = await fetch(`/api/posts/${id}`)
      const postsId = await response.json()
      setpostsId(postsId);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setDataLoading(false);
      return postsId
    }


}

export async function postModify(){
  
}
*/

/*{
    /*
  //const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, []);
  return { isLoading, data }; */
