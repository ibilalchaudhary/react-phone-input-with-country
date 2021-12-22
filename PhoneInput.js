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
        // onChange={(e) => setPhone( e.currentTarget.value)}
        onChange={setPhone}
      />
    </>
  );
}
