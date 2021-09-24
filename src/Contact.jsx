import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const FormData = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname} mobile no ${data.mobile} Email-id ${data.email} Message ${data.msg}`);
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact US
                </h1>
            </div>
            <div className="container contact-div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={FormData}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Name <span className="text-danger">*</span> </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address <span className="text-danger">*</span> </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobile no <span className="text-danger">*</span> </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="mobile"
                                    value={data.mobile}
                                    onChange={InputEvent}
                                    placeholder="+91 9876543210"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    rows="3">
                                </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;