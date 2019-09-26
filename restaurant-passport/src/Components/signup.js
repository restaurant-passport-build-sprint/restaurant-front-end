import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

function RegisterForm({ values, errors, touched, isSubmitting }) {
  return (
      
    <Form>
    <div className='mainForm_Display'>
      <div className="form">
        <h1>Create Account</h1>
      <div className="userName">
        <label>
          User Name:
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username" />
        </label>
      </div>
      <div className="password">
        <label>
          Password:
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
        </label>
      </div>
      {/* <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="text" name="Name" placeholder="Name" />
      </div>  */}
      <div>
        {touched.city && errors.city && <p>{errors.city}</p>}
        <Field type="text" name="City" placeholder="City" />
        </label>
      </div>
      <div className="email">
        <label>
        Email:
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="email" />
        </label>
      </div>
      
      <div className="createAccount">
      <button disabled={isSubmitting}>Signup &rarr;</button>
      </div>
      </div>
      </div>
    </Form>
    
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password, name, city, email }) {
    return {
      username: username || "",
      password: password || "",
      // name: name || "",
       city: city || "",
       email: email || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://foodie-pass.herokuapp.com/auth/register", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(RegisterForm);

export default FormikRegisterForm;