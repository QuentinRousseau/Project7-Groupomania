import { useState, useEffect } from "react";

export async function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, [url]);
  return { isLoading, data };
}

export async function fetchPost(e) {
  e.preventDefault();
  const tmp_date = new Date().toISOString().split("T");
  const creationDate = `${tmp_date[0]} ${tmp_date[1]}`;
  const post = { title, description, imageUrl, creationDate };

  console.log(post);

  fetch("/api/", {
    method: "POST",
    headers: { "Content-Type": "applcation/json" },
    body: JSON.stringify(post),
  }).then(() => {
    console.log("post créé");
  });
}

export async function signUpFetch(e) {
  const user = { email, password };

  console.log(user);

  fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "applcation/json" },
    body: JSON.stringify(user),
  }).then(() => {
    console.log("user créé");
  });
}

export async function loginFetch(e) {
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
