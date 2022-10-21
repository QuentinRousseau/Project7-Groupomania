import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

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
  const newImg = new FormData();
  newImg.append("image", imageUrl);

  const response = await fetch("/api/images", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: newImg,
  });
  console.log(response);
  if (!response) {
    return Promise.reject(await response.text());
  }
  const data = await response.json();
  console.log("image créé", data);
  return data;
}

export async function submitPost(token, author, title, body, url) {
  console.log(
    "Vérif des donées recues avant la requete POST",
    author,
    title,
    body,
    url
  );

  const post = { author, title, body, url };
  // console.log(token);
  // console.log(post);
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });
  // console.log(response);
  if (!response) {
    return Promise.reject(await response.text());
  }
  const data = await response.json();
  console.log("post créé", data);
  return data;
}
export async function submitLikes(token, _id, user, like) {
  console.log(" Voici le token", token);
  console.log("Voici l'id du post a liker", _id);

  const PostToLike = { user: user, like: like };

  console.log(" check de l'objet avant envoie", PostToLike);

  const response = await fetch(`/api/posts/` + _id + `/like`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(PostToLike),
  });
  console.log(response);
  if (!response) {
    return Promise.reject(await response.text());
  }
  const data = await response.json();
  console.log("retour data", data);
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

export async function submitDelete(post, token, _id) {
  console.log(post, token, _id);
  console.log("post test a envoyer  ", JSON.stringify(post));
  const response = await fetch(`/api/posts/${_id}`, {
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
  console.log("response :", data);
  return data;
}
