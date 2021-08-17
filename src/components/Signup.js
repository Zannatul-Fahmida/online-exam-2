import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../firebase.config";
import { useState } from "react";
import CommonBtn from './CommonBtn';

firebase.initializeApp(firebaseConfig);

const Signup = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        email: "",
        photo: "",
    });
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setUser(signInUser);
            })
            .catch((err) => {
                const errMgs = err.message;
                const errEmail = err.email;
            });
    };
    return (
        <div>
            <div className="lg:my-8 md:my-20 my-1 flex flex-col">
                <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="text-4xl title-font text-center mb-5 font-bold text-purple-900">Sign up</h1>
                        <input
                            type="text"
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            className="block w-full p-3 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <div className="text-center">
                            <CommonBtn destination="/login" title="Create Account" />
                        </div>

                        <div>
                            <p className="text-center text-sm text-grey-dark mt-4">By signing up, you agree to the <a className="no-underline border-b hover:border-purple-700 text-purple-700 font-semibold" href="#">
                                Terms of Service
                            </a> and <a className="no-underline border-b hover:border-purple-700 text-purple-700 font-semibold" href="#">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6 text-center">
                        Already have an account? <a className="no-underline border-b border-blue text-purple-700 font-semibold hover:border-purple-700" href="../login/">
                            Log in
                        </a>
                        <p>Or signup with <button onClick={handleSignIn} className="border-b border-blue text-purple-700 font-semibold hover:border-purple-700">gmail</button></p>
                    </div>
                </div>
            </div>

            <p>{user.name}</p>
            <img src={user.photo} alt="" />
        </div>
    );
};

export default Signup;