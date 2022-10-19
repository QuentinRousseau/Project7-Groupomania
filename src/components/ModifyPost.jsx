import { Box } from "react-bulma-components";
import { useState } from "react";
import { submitImage, submitPost } from "../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./Postinput.scss";
import { useField } from "../utils/hooks/useField";
import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useNavigate } from "react-router";

function Postinput(post = { title: "", body: "", url: "" }) {
  const { userLogged } = useContext(UserContext);

  const [title, setTitle] = useField(post.title);
  const [postContent, setPostContent] = useField(post.body);
  const [imageUrl, setImageUrl] = useField();
  const [message, setMessage] = useState("");

  const navigateTo = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      const token = userLogged.token;
      const user = userLogged.id;

      const image = e.target.image.files[0];

      // requete post pour obtenir l'image

      const responseImg = await submitImage(token, image);

      //attribution de l'url retour et attribution a l'objet post
      const ret = await submitPost(
        token,
        user,
        title,
        postContent,
        responseImg.imageUrl
      );
      console.log(ret);
      setMessage(ret.message);
      navigateTo("/login"); // voir avec yoann pour amélioration
    } catch (error) {
      setMessage(error);
    }
  }

  return (
    <Box className="postBox has-background-danger-light">
      <form onSubmit={submit}>
        <div className="field ">
          <label className="label">Titre du post</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Titre"
              name="title"
              value={title}
              onInput={setTitle}
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
              value={postContent}
              onInput={setPostContent}
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
              files={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.files[0]);
              }}
            ></input>
            <span className="file-cta">
              <span className="file-icon">
                <FontAwesomeIcon icon={faUpload} />
              </span>
              <span className="file-label">Choisir un fichier</span>
            </span>
            <span className="file-name has-background-white">
              {imageUrl?.name}
              {/*le "?" vérifie la donnée avant d'appeler le name*/}
            </span>
          </label>
          <button type="submit" className="button is-small is-danger mx-4 ">
            Confirmer
          </button>
          {message && JSON.stringify(message)}
        </div>
      </form>
    </Box>
  );
}

export default Postinput;
