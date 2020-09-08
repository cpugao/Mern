import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
    };

    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    const firstNameError = "First name has to be at least 2 characters!";
    const lastNameError = "Last name has to be at least 2 characters!";
    const emailError = "Email must be at least 2 characters!";
    const passwordError = "Password must be at least 8 characters!";
    const confirmPasswordError = "Passwords must match!";

    const handleFirstName = (event) => {
        const newFirstName = event.target.value;

        setFirstName(newFirstName);

        if (newFirstName.length < 2 && newFirstName.length != 0){
            setIsFirstNameValid(false);
        }
        else{
            setIsFirstNameValid(true);
        }
    }

    const handleLastName = (event) => {
        const newLastName = event.target.value;

        setLastName(newLastName);

        if (newLastName.length < 2 && newLastName.length != 0){
            setIsLastNameValid(false);
        }
        else{
            setIsLastNameValid(true);
        }
    }

    const handleEmail = (event) => {
        const newEmail = event.target.value;

        setEmail(newEmail);

        if (newEmail.length < 2 && newEmail.length != 0){
            setIsEmailValid(false);
        }
        else{
            setIsEmailValid(true);
        }
    }

    const handlePassword = (event) => {
        const newPassword = event.target.value;

        setPassword(newPassword);

        if (newPassword.length < 8 && newPassword.length != 0){
            setIsPasswordValid(false);
        }
        else{
            setIsPasswordValid(true);
        }
    }

    const handleConfirmPassword = (event) => {
        const newConfirmPassword = event.target.value;

        setConfirmPassword(newConfirmPassword);

        if (newConfirmPassword != password && newConfirmPassword.length != 0){
            setIsConfirmPasswordValid(false);
        }
        else{
            setIsConfirmPasswordValid(true);
        }
    }


    return (
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={handleFirstName} />
                    { !isFirstNameValid && <span style={{ color: "red" }}>{firstNameError}</span> }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={handleLastName} />
                    { !isLastNameValid && <span style={{ color: "red" }}>{lastNameError}</span> }
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={handleEmail} />
                    { !isEmailValid && <span style={{ color: "red" }}>{emailError}</span> }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handlePassword} />
                    { !isPasswordValid && <span style={{ color: "red" }}>{passwordError}</span> }
                </div>
                <div>
                    { !isConfirmPasswordValid && <span style={{ color: "red" }}>{confirmPasswordError}</span> }
                    <label html="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={handleConfirmPassword} />
                </div>
            </form>

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default UserForm;