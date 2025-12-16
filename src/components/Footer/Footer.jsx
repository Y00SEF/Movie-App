export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>MovieApp</h5>
            <p>Your ultimate destination for movies and entertainment.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light footer-link">
                  Genres
                </a>
              </li>
              <li>
                <a href="#" className="text-light footer-link">
                  Top Movies
                </a>
              </li>
              <li>
                <a href="#" className="text-light footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-light me-3 footer-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 footer-link">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light me-3 footer-link">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light footer-link">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2025 MovieApp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
