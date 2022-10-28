import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import { modifyPost, submitImage } from "../providers/fetch";
import { useField } from "../utils/hooks/useField";
import UserContext from "../providers/UserContext";

import "./Postinput.scss";

function ModifyPost(post = { title, body, url }) {
  post = post.post;

  const { userLogged } = useContext(UserContext); //utilisateur loggé
  const navigateTo = useNavigate();

  // var of post
  const [title, setTitle] = useField(post.title);
  const [body, setBody] = useField(post.body);
  const [imageUrl, setImageUrl] = useField();
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      const token = userLogged.token;

      let responseImg = post.url;

      const _id = post._id;
      const image = e.target.image.files[0];
      const author = post.author;

      // Voir pour checker si l'image est modifiée ou non ?
      if (image) responseImg = await submitImage(token, image);

      //attribution de l'url retour et attribution a l'objet post

      const ret = await modifyPost(
        token,
        _id,
        title,
        body,
        responseImg?.imageUrl,
        author
      );
      console.log(ret);
      setMessage(ret.message);
      navigateTo("/login");
    } catch (error) {
      setMessage(error);
    }
  }

  return (
    <form className="has-background-danger-light" onSubmit={submit}>
      {/* <pre>{JSON.stringify({ title, imageUrl, body }, null, 2)}</pre> */}
      <div className="field ">
        <label className="label">Titre du post</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Titre"
            name="title"
            defaultValue={post.title}
            onInput={(e) => {
              setTitle(e.target.title);
            }}
            onChange={setTitle}
          ></input>
        </div>
      </div>
      <div className="field">
        <label className="label">Contenu</label>
        <div className="control">
          <input
            id="postContentInput"
            className="input"
            type="text"
            name="body"
            placeholder="Contenu du post"
            defaultValue={post.body} // defaultValue permet d'afficher la valeur de post.body et de la modifier apres
            onInput={setBody}
            onChange={setBody} // attribution de la nouvelle valeure de body pour la modification
          ></input>
        </div>
      </div>

      <div className="file is-small has-name is-danger is-centered mb-3">
        <label className="file-label">
          <input
            className="file-input"
            id="fileinput"
            type="file"
            name="image"
            onInput={setImageUrl}
          ></input>
          <span className="file-cta">
            <span className="file-icon">
              <FontAwesomeIcon icon={faUpload} />
            </span>
            <span className="file-label">Choisir un fichier</span>
          </span>
          <span className="file-name has-background-white">{imageUrl}</span>
        </label>
        <button type="submit" className="button is-small is-danger mx-4 ">
          Confirmer
        </button>
        {message && JSON.stringify(message)}
      </div>
    </form>
  );
}

export default ModifyPost;
