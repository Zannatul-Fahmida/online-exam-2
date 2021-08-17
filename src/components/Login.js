import React from "react";
import CommonBtn from "./CommonBtn";
import { Link } from "react-router-dom";


const Login = () => {
	return (
		<div className="flex flex-col">
			<div className="bg-blue-50 w-full lg:w-1/3 md:w-2/3 mx-auto rounded-lg my-20 px-4 py-4 shadow-lg">
			<h2 className="text-4xl title-font text-center my-5 font-bold text-purple-900">Login</h2>
				<input type='text' placeholder="Email or Phone Number"
					className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
				<input type='password' placeholder="Password"
					className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
				<div className="w-full text-center mt-2">
					<CommonBtn destination="/login" title="Log in" />
				</div>
				<div class="flex justify-center my-4">
					<a className="text-blue-500 text-sm" href="#">Forgot account?</a>
				</div>
				<hr />
				<div className="text-center my-6">
					<p>Don't have account? <Link to="/signup" className="text-purple-900 font-bold">Sign up</Link></p>
				</div>
			</div>
		</div>
	);
};

export default Login;
