import React from "react";
import PhoneInput from "react-phone-number-input";

export default function PhoneInput() {
  return (
    <>
      <PhoneInput
        style={{
          width: "20px",
          height: "80px",
          display: "flex",
          flexDirection: "row",
        }}
        placeholder="Phone Number"
        label="Enter phone number"
        value={Phone}
         internationalIcon={() => {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-globe"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              );
            }}
        // onChange={(e) => setPhone( e.currentTarget.value)}
        onChange={setPhone}
      />
    </>
  );
}
