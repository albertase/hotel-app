import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Redirect = styled.p`
  color: green;
  text-align: center;
  padding: 10px;
  background-color: white;
  -webkit-box-shadow: 4px 4px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 4px 4px 16px -8px rgba(0, 0, 0, 0.75),
    4px 4px 16px -8px rgba(0, 0, 0, 0.75);
`

const Container = styled.div`
text-align: center;
  padding: 50px;
  background-color: white;
  -webkit-box-shadow: 4px 4px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 4px 4px 16px -8px rgba(0, 0, 0, 0.75),
    4px 4px 16px -8px rgba(0, 0, 0, 0.75);
`
const Button = styled.button`
  text-align: center;
  padding: 6px 20px;
  background-color: green;
  border-radius: 10px;
  cursor: pointer;
`

const Contact = () => {
  var [state, handleSubmit] = useForm("xoqroadk");

  
  
  if (state.succeeded) {
    return (
      <Container>
        <Redirect>Thanks for Contacting us!</Redirect>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Container>
    
    )
  }
  return (
    <div className="container contact">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
              <h1 className="text-center bg-dark text-white display-4 d-inline-block">
                Contact us
              </h1>
              <div className="form-group my-5">
                <div className="row">
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control-lg"
                      placeholder="First Name"
                    required

                    />
                    <ValidationError
                      prefix="First Name"
                      field="firstName"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control-lg"
                      placeholder="last Name"
                    required

                    />
                    <ValidationError
                      prefix="Last Name"
                      field="lastName"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-5">
                <div className="row">
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control-lg"
                      placeholder="Email Address"
                    required

                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control-lg"
                      placeholder="Phone no."
                    required

                    />
                    <ValidationError
                      prefix="Phone Number"
                      field="phone"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-11">
                  <textarea
                    className="form-control"
                    name="message"
                    row="20"
                    placeholder="Your message"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="mt-5 col-md-6 col-12 mx-auto">
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-lg btn-block"
                  disabled={state.submitting}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
