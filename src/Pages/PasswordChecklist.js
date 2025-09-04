import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // install react-icons if not already

// Validation rules
const passwordRules = {
  length: (pw) => pw.length >= 6,
  uppercase: (pw) => /[A-Z]/.test(pw),
  lowercase: (pw) => /[a-z]/.test(pw),
  number: (pw) => /\d/.test(pw),
  specialChar: (pw) => /[@$!%*?&]/.test(pw),
};

const PasswordChecklist = ({ password }) => {
  const rules = [
    { label: "At least 6 characters", valid: passwordRules.length(password) },
    { label: "At least one uppercase letter", valid: passwordRules.uppercase(password) },
    { label: "At least one lowercase letter", valid: passwordRules.lowercase(password) },
    { label: "At least one number", valid: passwordRules.number(password) },
    { label: "At least one special character (@$!%*?&)", valid: passwordRules.specialChar(password) },
  ];

  return (
    <div style={{
      background: "#f9f9f9",
      padding: "10px",
      borderRadius: "8px",
      marginTop: "10px",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, fontSize: "0.9rem" }}>
        {rules.map((rule, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            {rule.valid ? (
              <FaCheckCircle color="green" />
            ) : (
              <FaTimesCircle color="red" />
            )}
            <span style={{ color: rule.valid ? "green" : "red" }}>{rule.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordChecklist;
