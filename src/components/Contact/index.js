import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    if (!message) {
      setErrorMessage(`Message must be`);
      return;
    }
    alert(`Hello ${userName}`);

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="contact d-flex justify-content-center ">
      <form className="form align-middle rounded">
        <div className="form-conatiner pt-5">
          <div class="mb-3  text-center">
          <label className="m-3 h5" for="exampleInputEmail1">Email address</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
              className="w-50 text-center p-2 rounded"
            />
          </div>
          <div class="mb-3  text-center ">
          <label className="m-4 h5" for="exampleInputEmail1">User      Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username"
              className="w-50 text-center p-2 rounded"
            />
          </div>
          <div class="mb-3 text-center">
          <label className="m-3 h5" for="exampleInputEmail1">Your Message</label>
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
              className="w-50 text-center p-2 rounded"
            />
          </div>
          <div className="text-center ">
            <button className="mt-4 p-2 rounded" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </div>
        {errorMessage && (
        <div className="text-center h5
        ">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>{" "}
    
    </div>

    // <div>
    //   <p>Hello {userName}</p>
    //   <form className="form">
    //     <input
    //       value={email}
    //       name="email"
    //       onChange={handleInputChange}
    //       type="email"
    //       placeholder="email"
    //     />
    //     <input
    //       value={userName}
    //       name="userName"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="username"
    //     />
    //     <input
    //       value={message}
    //       name="message"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="message"
    //     />
    //     <button type="button" onClick={handleFormSubmit}>
    //       Submit
    //     </button>
    //   </form>
    //   {errorMessage && (
    //     <div>
    //       <p className="error-text">{errorMessage}</p>
    //     </div>
    //   )}
    // </div>
  );
}

export default Contact;
