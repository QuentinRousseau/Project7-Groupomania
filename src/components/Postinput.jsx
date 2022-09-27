import { Box } from "react-bulma-components";
import { useState } from "react";
import { submitPost } from "../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./Postinput.scss";
import { useField } from "../utils/hooks/useField";
import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useNavigate } from "react-router";


function Postinput() {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useField("");
  const [postContent, setPostContent] = useField("");
  const [imageUrl, setImageUrl] = useField();
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log("vérif de la data a envoyer")
    console.log(imageUrl, title, postContent);
    setMessage("Please wait ...");
    try {
      const token = user.token;
      const userId = user.id;
      console.log("on va faire le fetch");
      const ret = await submitPost(
        token,
        userId,
        title,
        postContent,
        imageUrl
      );
      console.log("on a eu le fetch !!");
      console.log(ret);
      setMessage(ret.message);
    
    } catch (e) {
      console.log("on a loupé le fetch le fetch");
      setMessage(e);
    }
  }

  return (
    <Box id="postBox" className="has-background-danger-light">
      <form onSubmit={submit}>
        <div className="field ">
          <label className="label">Titre du post</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Titre"
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
              type="file"
              name="resume"
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
          {JSON.stringify(message)}
        </div>
      </form>
    </Box>
  );
}

export default Postinput;
