import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Nav-Bar/Navbar";

export default function NotFound() {
  return (
    <>
      <div className="container text-center mt-5">
        <i className="bi bi-film display-1 mb-4 notfound-icon"></i>
        <h1 className="display-4 text-white">404 - Page Not Found</h1>
        <p className="lead text-white">
          The movie you're looking for isn't here. Perhaps it's in another
          theater?
        </p>
        <a href="/" className="btn btn-lg notfound-btn">
          Back to Home
        </a>
      </div>
    </>
  );
}
