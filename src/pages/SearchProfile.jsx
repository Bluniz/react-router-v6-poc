import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function SearchProfile() {
  const [profileName, setProfileName] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setProfileName(event.target.value);
  };

  const handleSubmit = (event, data) => {
    event.preventDefault();
    navigate(`/profile/${profileName}`);
  };

  return (
    <div>
      <h3>Search Profile</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profileName"
          id="profileName"
          value={profileName}
          onChange={handleChange}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}
