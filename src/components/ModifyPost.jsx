import { Box } from "react-bulma-components";
import { useState } from "react";
import { modifyPost, submitImage, submitPost } from "../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./Postinput.scss";
import { useField } from "../utils/hooks/useField";
import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useNavigate } from "react-router";

function ModifyPost(post = { title, body, url }) {
  console.log(post);
  post = post.post;
  console.log(
    "titre du post:  ",
    post.title,
    "body du post:   ",
    post.body,
    "url de l'image:    ",
    post.url
  );

  const { userLogged } = useContext(UserContext);
  const navigateTo = useNavigate();

  // const a utiliser ?

  const [title, setTitle] = useField(post.title);
  const [body, setBody] = useField(post.body);
  const [imageUrl, setImageUrl] = useField();
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      const token = userLogged.token;
      const user = userLogged.id;

      // const a bouger d'endroit ?
      const image = e.target.image.files[0];
      const title = e.target.title;
      const body = e.target.body;

      // requete post pour obtenir l'image
      // Voir pour checker si l'image est modifiée ou non ?

      const responseImg = await submitImage(token, image);

      //attribution de l'url retour et attribution a l'objet post
      const ret = await submitPostModified(token, user, title, body, image);
      console.log(ret);
      setMessage(ret.message);
      navigateTo("/login");
    } catch (error) {
      setMessage(error);
    }
  }

  return (
    <form className="has-background-danger-light" onSubmit={submit}>
      <div className="field ">
        <label className="label">Titre du post</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Titre"
            name="title"
            value={post.title}
            onInput={title}
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
            value={post.body}
            onInput={body}
          ></input>
        </div>
      </div>

      {/**mettre le bouton update file dans un autre composant? */}

      <div className="file is-small has-name is-danger is-centered">
        <label className="file-label">
          <input
            className="file-input"
            id="fileinput"
            type="file"
            name="image"
            files={post.url}
            onInput={imageUrl}
          ></input>
          <span className="file-cta">
            <span className="file-icon">
              <FontAwesomeIcon icon={faUpload} />
            </span>
            <span className="file-label">Choisir un fichier</span>
          </span>
          <span className="file-name has-background-white">
            {post.url}
            {/*le "?" vérifie la donnée avant d'appeler le name*/}
          </span>
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
