import { Box } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./postinput.scss";

function Postinput() {
  return (
    <Box id="postBox" className="has-background-danger-light">
      <div class="field ">
        <label class="label">Titre du post</label>
        <div class="control">
          <input class="input" type="text" placeholder="Titre"></input>
        </div>
      </div>
      <div class="field">
        <label class="label">Contenu</label>
        <div class="control">
          <input
            id="postContentInput"
            class="input"
            type="text"
            placeholder="Contenu du post"
          ></input>
        </div>
      </div>

      <div class="file is-small has-name is-danger is-centered">
        <label class="file-label">
          <input class="file-input" type="file" name="resume"></input>
          <span class="file-cta">
            <span class="file-icon">
              <FontAwesomeIcon icon={faUpload} />
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name has-background-white">...</span>
        </label>
      </div>
    </Box>
  );
}

export default Postinput;
