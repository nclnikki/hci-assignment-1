import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // import icons

function PasswordInput({ value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        style={{ paddingRight: "40px", width: "100%" }}
      />
      <span
        onClick={() => setShow(!show)}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          color: "#555",
        }}
      >
        {show ? <AiFillEyeInvisible /> : <AiFillEye />}
      </span>
    </div>
  );
}

export default PasswordInput;
