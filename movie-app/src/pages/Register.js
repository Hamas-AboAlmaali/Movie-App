import { useState } from "react";

const Register = () => {
    const emailFormat = new RegExp(
        "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    const passwordFormat = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

    const [formDetails, setFormDetails] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPass: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: null,
        username: null,
        email: null,
        password: null,
        confirmPass: null,
    });

    const handleInputChange = (e) => {
        /* ========= This is the Name Input ========= */
        if (e.target.name === "name") {
            setFormDetails({
                ...formDetails,
                name: e.target.value,
            });

            setFormErrors({
                ...formErrors,
                name:
                    e.target.value === ""
                        ? "Name is required"
                        : e.target.value.length < 3
                            ? "Name must be more than three characters"
                            : null,
            });
        }

        /* ========= This is the Email Input ========= */
        if (e.target.name === "email") {
            setFormDetails({
                ...formDetails,
                email: e.target.value,
            });

            setFormErrors({
                ...formErrors,
                email:
                    e.target.value === ""
                        ? "Email is required"
                        : !emailFormat.test(formDetails.email)
                            ? "This email is not Valid"
                            : "",
            });
        }

        /* ========= This is the UserName Input ========= */
        if (e.target.name === "username") {
            setFormDetails({
                ...formDetails,
                username: e.target.value,
            });

            setFormErrors({
                ...formErrors,
                username:
                    e.target.value.length === 0
                        ? "User Name is required"
                        : e.target.value.length < 3
                            ? "Name must be more than three characters"
                            : e.target.value.includes(" ")
                                ? "User Name must haven't any spaces"
                                : null,
            });
        }

        /* ========= This is the Password Input ========= */
        if (e.target.name === "password") {
            setFormDetails({
                ...formDetails,
                password: e.target.value,
            });

            setFormErrors({
                ...formErrors,
                password:
                    e.target.value.length < 8
                        ? "Password must be more than 8 characters"
                        : !passwordFormat.test(formDetails.password)
                            ? "This Password is not Valid"
                            : "",
            });
        }

        /* ========= This is the Confirm Password Input ========= */
        if (e.target.name === "confirm-password") {
            setFormDetails({
                ...formDetails,
                confirmPass: e.target.value,
            });

            setFormErrors({
                ...formErrors,
                confirmPass:
                    e.target.value !== formDetails.password
                        ? "Passwords doesn't match"
                        : "",
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container my-5">
                <h2>Registeration Form</h2>
                <hr />
            </div>

            <div className="container ">
                <form onSubmit={handleSubmit}>
                    {/* ========= This is the Name Input ========= */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formErrors.name ? "border-danger" : ""
                                }`}
                            id="name"
                            name="name"
                            aria-describedby="name-field"
                            value={formDetails.name}
                            onChange={handleInputChange}
                        />
                        <div
                            id="name-field"
                            className={`form-text container ${formErrors.name ? "text-danger" : "text-success"
                                }`}
                        >
                            {formErrors.name ? `${formErrors.name}` : `${formDetails.name}`}
                        </div>
                    </div>

                    {/* ========= This is the Email Input ========= */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formErrors.email ? "border-danger" : ""
                                }`}
                            id="email"
                            name="email"
                            aria-describedby="email-field"
                            value={formDetails.email}
                            onChange={handleInputChange}
                        />
                        <div
                            id="email-field"
                            className={`form-text container ${formErrors.email ? "text-danger" : "text-success"
                                }`}
                        >
                            {formErrors.email
                                ? `${formErrors.email}`
                                : `${formDetails.email}`}
                        </div>
                    </div>

                    {/* ========= This is the User Name Input ========= */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            User Name
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formErrors.username ? "border-danger" : ""
                                }`}
                            id="username"
                            name="username"
                            aria-describedby="username-field"
                            value={formDetails.username}
                            onChange={handleInputChange}
                        />
                        <div
                            id="username-field"
                            className={`form-text container ${formErrors.username ? "text-danger" : "text-success"
                                }`}
                        >
                            {formErrors.username
                                ? `${formErrors.username}`
                                : `${formDetails.username}`}
                        </div>
                    </div>

                    {/* ========= This is the Password Input ========= */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className={`form-control ${formErrors.username ? "border-danger" : ""
                                }`}
                            id="password"
                            name="password"
                            aria-describedby="password-field"
                            value={formDetails.password}
                            onChange={handleInputChange}
                        />
                        <div
                            id="password-field"
                            className={`form-text container ${formErrors.password ? "text-danger" : "text-success"
                                }`}
                        >
                            {formErrors.password
                                ? `${formErrors.password}`
                                : `${formDetails.password}`}
                        </div>
                    </div>

                    {/* ========= This is the Confirm Password Input ========= */}
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className={`form-control ${formErrors.confirmPass ? "border-danger" : ""
                                }`}
                            id="confirm-password"
                            name="confirm-password"
                            aria-describedby="confirm-password-field"
                            value={formDetails.confirmPass}
                            onChange={handleInputChange}
                        />
                        <div
                            id="confirm-password-field"
                            className={`form-text container ${formErrors.confirmPass ? "text-danger" : "text-success"
                                }`}
                        >
                            {formErrors.confirmPass
                                ? `${formErrors.confirmPass}`
                                : `${formDetails.confirmPass}`}
                        </div>
                    </div>

                    {/* ========= This is the Register Button ========= */}
                    <button type="submit" className="btn btn-success">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;
