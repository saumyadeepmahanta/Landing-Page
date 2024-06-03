// import React from "react";

// const ContactForm = () => {
//   return (
//     <>
//       <form action="#" className="rbt-profile-row rbt-default-form row row--15">
//         <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//           <div className="form-group">
//             <label htmlFor="firstname1">First Name</label>
//             <input id="firstname1" type="text" placeholder="Fazlay" />
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//           <div className="form-group">
//             <label htmlFor="lastname1">Last Name</label>
//             <input id="lastname1" type="text" placeholder="Elahi" />
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//           <div className="form-group">
//             <label htmlFor="username1">User Name</label>
//             <input id="username1" type="text" placeholder="Rafi" />
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//           <div className="form-group">
//             <label htmlFor="phonenumber1">Phone Number</label>
//             <input id="phonenumber1" type="tel" placeholder="+1-202-555-0174" />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="form-group">
//             <label htmlFor="bio1">Bio</label>
//             <textarea
//               id="bio1"
//               cols="20"
//               rows="5"
//               placeholder="I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."
//             ></textarea>
//           </div>
//         </div>
//         <div className="col-12 mt--20">
//           <div className="form-group mb--0">
//             <a className="btn-default" href="#">
//               Update Info
//             </a>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default ContactForm;
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, username, phone, bio } = formData;

    // Construct the pre-filled Google Form URL
    const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSfR8ZLOpZWR5zHXRp-sQ6mLQNVQEsOjfJHrgkr0aGuTdUSEmQ/formResponse?entry.1110111924=${encodeURIComponent(
      firstname
    )}&entry.996037132=${encodeURIComponent(
      lastname
    )}&entry.730396101=${encodeURIComponent(
      username
    )}&entry.1422877652=${encodeURIComponent(
      phone
    )}&entry.131004444=${encodeURIComponent(bio)}`;

    // Open the URL to submit the form
    window.open(googleFormURL, "_blank");
  };

  return (
    <form
      className="rbt-profile-row rbt-default-form row row--15"
      onSubmit={handleSubmit}
    >
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Fazlay"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Elahi"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Rafi"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1-202-555-0174"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            cols="20"
            rows="5"
            value={formData.bio}
            onChange={handleChange}
            placeholder="I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."
          ></textarea>
        </div>
      </div>
      <div className="col-12 mt--20">
        <div className="form-group mb--0">
          <button className="btn-default" type="submit">
            Update Info
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
