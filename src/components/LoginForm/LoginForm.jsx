import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ContextData } from "../../ContectContent/ContextContent";

export default function LoginForm() {
  let { UserToken, setUserToken } = useContext(ContextData);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate("");

  async function submit(e) {
    e.preventDefault();
    const values = { email, password };
    let response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await response.json();
    console.log(data);

    if (data.message === "success") {
      toast.success("You have logged in successfully");
      console.log(data.token);

      localStorage.setItem("UserToken", data.token);
      setUserToken(data.token); // <-- ده يحدث الـ context فورًا
      navigate("/home"); // <-- بدون setTimeout
    } else {
      toast.error("Your email or password is incorrect");
    }
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow bg-dark text-light">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <i className="bi bi-film signup-logo me-3"></i>
                  <h2 className="card-title mb-0">Login</h2>
                </div>
                <div className="text-center mb-3">
                  <p>Sign up with:</p>
                  <button className="btn btn-danger me-2">
                    <i className="bi bi-google"></i> Google
                  </button>
                  <button className="btn btn-primary me-2">
                    <i className="bi bi-facebook"></i> Facebook
                  </button>
                  <button className="btn btn-light">
                    <i className="bi bi-apple"></i> Apple
                  </button>
                </div>
                <hr className="my-3" />
                <form className="signup-form" onSubmit={submit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-dark border-secondary text-light">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="Email"
                      value={email}
                      onInput={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-dark border-secondary text-light">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="Password"
                      value={password}
                      onInput={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn signup-btn ">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
