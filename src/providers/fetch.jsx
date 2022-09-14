import { useContext } from "react";
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

export async function useFetch() {
  const [FeedpageData, setFeedpageData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchAllPosts() {
      setDataLoading(true);
      try {
        const response = await fetch(`/api/posts`);
        const FeedpageData = await response.json();
        setFeedpageData(FeedpageData);
      } catch (err) {
        console.log("===== error =====", err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchAllPosts();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
}

/* function post request on submit */
export async function signUpFetch(name, email, password) {
  const user = { name, email, password }; //recupération des données saisies et creation de l'objet
  console.log(user); //affichage de l'objet

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user), //mail: SyntheticBaseEvent et mdp: undefined. pourquoi
  });
  if (!response.ok) {
    return Promise.reject(await response.text()); //si la réponse n'est pas bonne; retour d'une promise rejeté
  }
  return response.json();
}
/* function post request on submit */
export async function loginFetch(email, password) {
  const user = { email, password };
  console.log(user);

  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    return Promise.reject(await response.text()); //si la réponse n'est pas bonne; retour d'une promise rejeté
  }
  return response.json();
}

export async function submitPost(userId, title, postContent, imageUrl) {
  const { user } = useContext(UserContext);
  const tmp_date = new Date().toISOString().split("T");
  const creationDate = `${tmp_date[0]} ${tmp_date[1]}`;
  const post = { userId, title, postContent, imageUrl, creationDate };
  const token = user.token;

  console.log(token);
  console.log(post);
  const response = await fetch("/api/posts/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });
  console.log(response);
  if (!response) {
    return Promise.reject(await response.text());
  }
  const data = await response.json();
  console.log("post créé", data);
  return data;
}

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
