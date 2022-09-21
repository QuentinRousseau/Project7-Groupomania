import { Link } from "react-router-dom";

function RoadToTest() {
  return (
    <div>
      <Link to={"/posts"}>/posts</Link>
      <Link to={"/login"}>/login</Link>
      <Link to={"/signup"}>/signup</Link>
    </div>
  );
}

export default RoadToTest;
