import { useContext, useEffect } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

export async function useFetch() {
  const { user } = useContext(UserContext);

  const token = user.token;

  useEffect(() => {
    async function fetchAllPost() {
      try {
        const response = await fetch(`/api/posts`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const feedPageData = await response.json();
        console.log(feedPageData);
      } catch (error) {
        throw new Error();
      }
    }
    fetchAllPost();
  }, []);
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

export async function submitImage(token, imageUrl) {
  console.log(imageUrl,token);

  const imageFromData = new FormData();
  console.log(imageFromData)
  imageFromData.append("image",imageUrl);
  // console.log(token);
  console.log(imageFromData);

  const response = await fetch("/api/images", {
    method: "POST",
    headers: {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    body: imageFromData,
  });
  console.log(response);
  if (!response) {
    return Promise.reject(await response.text());
  }
  const data = await response.json();
  console.log("post créé", data);
  return data;
}

export async function submitPost(token, userId, title, postContent, imageUrl) {
  const tmp_date = new Date().toISOString().split("T");
  const creationDate = `${tmp_date[0]} ${tmp_date[1]}`;
  console.log(
    "Vérif des donées recues avant la requete POST",
    userId,
    title,
    postContent,
    imageUrl,
    creationDate
  );

  const post = { userId, title, postContent, responseImg, creationDate };
  // console.log(token);
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

export async function modifyPost(token, userId, title, postContent, imageUrl) {
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

export async function deletePost(token, userId, title, postContent, imageUrl) {
  const post = this.post;

  const response = await fetch("/api/posts", {
    method: "DELETE",
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
  console.log("post supprimé !", data);
  return data;
}
