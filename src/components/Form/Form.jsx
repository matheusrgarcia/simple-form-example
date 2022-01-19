import { useState } from "react";
import "./form.css";

const Form = () => {
  const [file, setFile] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [jobTitle, setjobTitle] = useState();

  const submitForm = () => {
    const formData = {
      file,
      fullName,
      email,
      jobTitle,
    };
    fetch("api/fake", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  return (
    <form onSubmit={submitForm}>
      <span className="title">Add Team Member</span>
      <div className="file-input">
        <span></span>
        <input type="file" onChange={(event) => setFile(event.target.value)} />
      </div>
      <div className="fields">
        <div className="text-input">
          <label htmlFor="fullName">Full Name</label>
          <input
            required
            id="fullName"
            type="text"
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className="text-input">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="text-input">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            required
            id="jobTitle"
            type="text"
            onChange={(event) => setjobTitle(event.target.value)}
          />
        </div>
      </div>
      <div className="form-footer">
        <input
          className="submit-button"
          type="submit"
          value="Add Team Member"
        />
      </div>
    </form>
  );
};

export default Form;
