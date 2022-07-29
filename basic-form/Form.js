import React from "react";

// Form, holds the component for the page. 
export default function Form() {
    
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            subscribe: false
        }
    );

    function changeData(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.type === "checkbox" ? !prevFormData.subscribe: event.target.value
            }
        })
    }

    function submitData(event){
        event.preventDefault();
        console.log(formData)
    }

    return (
        <form>
            <h3>Enter your info!</h3>
            <input 
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={changeData}
                className="form-input"
            />
            <input 
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={changeData}
                className="form-input"
            />
            <input 
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={changeData}
                className="form-input"
            />
            <input 
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={changeData}
                className="form-input"
            />
            <div className="form-input form-checkbox">
                <input 
                    type="checkbox"
                    name="subscribe"
                    value={formData.subscribe}
                    onChange={changeData}
                    id="subscribe"
                />
                <label htmlFor="subscribe">Subscribe to our newsletter?</label>
            </div>
            <button className="form-input form-btn" onClick={submitData}>Submit</button>
            <p>
                Name: {formData.firstName} {formData.lastName}<br/>
                Email/Password: {formData.email} / {formData.password}<br/>
                Subscribed? {formData.subscribe ? "Yes" : "No"}               
            </p>
        </form>
    )
}

