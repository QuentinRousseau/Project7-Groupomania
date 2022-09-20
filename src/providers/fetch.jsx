import { useContext } from "react";
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

export async function useFetch() {
  const [FeedpageData, setFeedpageData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useContext(UserContext);

  const token = user.token;

  setDataLoading(true);
  try {
    const response = await fetch(`/api/posts`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const FeedpageData = await response.json();
    setFeedpageData(JSON.stringify(FeedpageData));
    console.log(FeedpageData);
    setDataLoading(false);
  } catch (err) {
    console.log("===== error =====", err);
    setError(true);
  }
  return FeedpageData;
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

export async function submitPost(token, userId, title, postContent, imageUrl) {
  const tmp_date = new Date().toISOString().split("T");
  const creationDate = `${tmp_date[0]} ${tmp_date[1]}`;
  console.log(userId, title, postContent, imageUrl, creationDate);
  const post = { userId, title, postContent, imageUrl, creationDate };

  console.log(token);
  console.log(post);
  const response = await fetch("/api/posts", {
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
