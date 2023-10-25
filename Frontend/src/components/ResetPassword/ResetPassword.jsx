import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import "./ResetPassword.css";

const ResetPasswordForm = () => {
  const { token, userId } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchError, setMatchError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      setMatchError(true);
    } else {
      // Send the new password to your server here using fetch or any other method.
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to update the password.
      fetch("http://127.0.0.1:8000/mail/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword: password,
          confirmPassword,
          token,
          userId,
        }),
      })
        // .then((response) => {
        //   console.log(response);
        //   if (response.ok) {
        //     setSubmitSuccess(true);
        //   } else {
        //     // Handle error
        //   }
        // })
        // .catch((error) => {
        //   console.error(error);
        //   // Handle error
        // });
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  };

  return (
    <div>
      {submitSuccess ? (
        <p>Password successfully updated.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {matchError && <p>Passwords do not match.</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordForm;
