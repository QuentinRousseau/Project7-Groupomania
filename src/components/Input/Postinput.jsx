import { Box } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./postinput.scss";

function Postinput() {
  return (
    <Box id="postBox" className="has-background-danger-light">
      <div className="field ">
        <label className="label">Titre du post</label>
        <div className="control">
          <input className="input" type="text" placeholder="Titre"></input>
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
          ></input>
        </div>
      </div>

      <div className="file is-small has-name is-danger is-centered">
        <label className="file-label">
          <input className="file-input" type="file" name="resume"></input>
          <span className="file-cta">
            <span className="file-icon">
              <FontAwesomeIcon icon={faUpload} />
            </span>
            <span className="file-label">Choisir un fichier</span>
          </span>
          <span className="file-name has-background-white">...</span>
        </label>
      </div>
    </Box>
  );
}

export default Postinput;
