import { Link } from "react-router-dom";
import EmInput from "../components/custom/EmInput";
import useLoginHook from "../hooks/useLoginHook";
import EmButton from "../components/custom/EmButton";

const Login = () => {
    const {
        handleChange,
        handleClick
    } = useLoginHook();
    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <img src="assets/img/logo.png" alt="logo" />
                                    <span className="d-none d-lg-block">MultiVendor</span>
                                </div>{/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p className="text-center small">Enter your username &amp; password to login</p>
                                        </div>
                                        <form className="row g-3 needs-validation">
                                            <div className="col-12">
                                                <div className="input-group has-validation">
                                                    <EmInput
                                                        label="Your Email"
                                                        name="email"
                                                        type="email"
                                                        handleChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <EmInput
                                                    label="Password"
                                                    name="password"
                                                    type="password"
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <EmButton
                                                    className="btn btn-primary w-100"
                                                    type="submit"
                                                    value="Login"
                                                    handleClick={handleClick}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Dont have account? <Link to="/register">Create an account</Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="credits">
                                    Designed by <Link to="https://bootstrapmade.com/">MultiVendor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Login
