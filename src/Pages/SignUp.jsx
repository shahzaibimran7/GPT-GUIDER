import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Input, Ripple, initTE } from "tw-elements";

initTE({ Input, Ripple });

const countryOptions = [
  { value: "egypt", label: "Egypt" },
  // Add more country options here
];

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleSignup = () => {
    if (!selectedCountry) {
      alert("Please select your country.");
    } else if (selectedCountry.value !== "egypt") {
      alert("You can only select Egypt as your country.");
    } else if (!email.trim() || !password.trim()) {
      alert("Please fill in all the fields.");
    } else {
      // Perform signup logic here
      alert("Signup successful!");
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Signup form */}
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              {/* Country selection */}
              <div className="mb-6">
                <label htmlFor="country">Select Your Country</label>
                <Select
                  id="country"
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  isSearchable={true}
                  placeholder="Select your country"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "#ACFFAD" : "white",
                    }),
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 3,
                    colors: {
                      ...theme.colors,
                      primary25: "#3A1078",
                      primary: "#3A1078",
                    },
                  })}
                />
              </div>

              {/* Email input */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] outline-none bg-white text-black w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:text-white dark:text-black dark:peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  className="peer block min-h-[auto] outline-none bg-white text-black w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:text-white dark:text-black dark:peer-focus:text-primary"
                >
                  Password
                </label>
              </div>

              {/* Signup button */}
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  onClick={handleSignup}
                  className="inline-block rounded bg-Green-gradient px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Signup
                </button>
              </div>

              {/* Sign in link */}
              <div className="mt-6 text-center">
                <p className="text-white">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary text-[#ACFFAD]">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
