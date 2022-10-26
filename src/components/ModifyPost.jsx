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
  post = post.post;

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

      let responseImg = post.url;

      const _id = post._id;
      const image = e.target.image.files[0];
      const author = post.author;

      console.log("y'a t il une image ? : ", image);
      // requete post pour obtenir l'image
      // Voir pour checker si l'image est modifiée ou non ?
      if (image) responseImg = await submitImage(token, image);
      //attribution de l'url retour et attribution a l'objet post
      console.log(
        "    id du post    :",
        _id,
        "    token : ",
        token,
        "L'image qui va etre envoyée",
        responseImg,
        "le title est le suivant :   ",
        title,
        "le body est le suivant    : ",
        body,
        "ceci est l'auteur du post:   ",
        author
      );

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
      <pre>{JSON.stringify({ title, imageUrl, body }, null, 2)}</pre>
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

      {/**mettre le bouton update file dans un autre composant? */}

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
          <span className="file-name has-background-white">
            {imageUrl}
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
