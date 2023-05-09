import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormFileInput from "../../helpers/renderFormFileInput";
import axios from 'axios';
import {
  required,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
  email,
} from "../../helpers/validation";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconEnvelop } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconGeoAlt } from "bootstrap-icons/icons/geo-alt.svg";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconPersonSquareFill } from "bootstrap-icons/icons/person-lines-fill.svg";

const ProfileForm = (props) => {
  const {
    handleSubmit,
    submitting,
    submitFailed,
    // onImageChange,
    // imagePreview,
  } = props;
  const user = JSON.parse(sessionStorage.getItem('user'));


  const onSubmit = (formData) => {

    console.log("name " + formData.name);
    console.log("mobi " + formData.mobileNo);
    console.log("location " + formData.location);
    // try {
    //   await axios.put(`http://localhost:8080/api/users/${user.id}/edit-profile`, {
    //     "name": formData.name,
    //     "mobileNo": formData.mobileNo,
    //     "location": formData.location
    //   });

    //   // Handle success
    //   alert("Profile updated successfully!");
    // } catch (error) {
    //   // Handle error
    //   alert("Failed to update profile. Please try again later.");
    // }
  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-primary">
        <h6 className="card-header">
          <IconPersonSquareFill /> Profile Detail
        </h6>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Field
              name="name"
              type="text"
              component={renderFormGroupField}
              placeholder="Your name"
              icon={IconPerson}
              validate={[required, name]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="mobileNo"
              type="number"
              component={renderFormGroupField}
              placeholder="Mobile no without country code"
              icon={IconPhone}
              validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
              required={true}
              max="999999999999999"
              min="9999"
            />
          </li>

          <li className="list-group-item">
            <Field
              name="location"
              type="text"
              component={renderFormGroupField}
              placeholder="Your location"
              icon={IconGeoAlt}
              validate={[required]}
              required={true}
            />
          </li>

        </ul>
        <div className="card-body">
          <button
            type="submit"
            className="btn btn-primary  d-flex"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </div>

    </form>
  );
};

export default compose(
  reduxForm({
    form: "profile",
  })
)(ProfileForm);
