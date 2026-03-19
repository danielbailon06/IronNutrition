import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for doesn’t exist.</p>

      <Link to="/">Back to dashboard</Link>
    </div>
  );
}

export default NotFoundPage;