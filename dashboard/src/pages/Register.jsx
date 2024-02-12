import { Link } from "react-router-dom"
import EmInput from "../components/custom/EmInput"
import useRegisterHook from "../hooks/useRegisterHook"
import EmButton from "../components/custom/EmButton";

const Register = () => {
    const {
        errorMessages,
        handleChange,
        handleClick
    } = useRegisterHook();
    //console.log("errorMessages---------", errorMessages);

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
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p className="text-center small">Enter your personal details to create account</p>
                                        </div>
                                        <form className="row g-3 needs-validation">
                                            <div className="col-12">
                                                <EmInput
                                                    label="Your Email"
                                                    name="email"
                                                    type="email"
                                                    handleChange={handleChange}
                                                />
                                                {
                                                    errorMessages && (
                                                        <div className="invalid-feedback">{errorMessages?.email}</div>
                                                    )
                                                }

                                            </div>
                                            <div className="col-12">
                                                <EmInput
                                                    label="Enter Password"
                                                    name="password"
                                                    type="password"
                                                    handleChange={handleChange}
                                                />
                                                {
                                                    errorMessages && (
                                                        <div className="invalid-feedback">{errorMessages?.password}</div>
                                                    )
                                                }
                                            </div>
                                            <div className="col-12">
                                                <EmButton
                                                    className="btn btn-primary w-100"
                                                    type="submit"
                                                    value="Create Account"
                                                    handleClick={handleClick}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Already have an account? <Link to="/">Log in</Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="credits">
                                    Designed by <a href="https://bootstrapmade.com/">MultiVender</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    )
}

export default Register
