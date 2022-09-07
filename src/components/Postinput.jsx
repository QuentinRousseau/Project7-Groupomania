import { Box } from "react-bulma-components";
import { useState } from "react";
import { submitPost } from "../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./postinput.scss";
import { useNavigate } from "react-router-dom";
import { useField } from "../utils/hooks/useField";

function Postinput() {
  const [title, setTitle] = useField();
  const [description, setDescription] = useField();
  const [imageUrl, setImageUrl] = useField();
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      console.log("t'es dedans !");
      const ret = await submitPost(title, description, imageUrl);
      console.log(ret);
    } catch (e) {
      setMessage(e);
    }
  }
  //lors du submitPost le title is not defined
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
              value={description}
              onInput={setDescription}
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
              value={imageUrl}
              onInput={imageUrl ? "..." : setImageUrl}
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
          {message}
        </div>
      </form>
    </Box>
  );
}

export default Postinput;
