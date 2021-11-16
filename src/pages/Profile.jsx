import { useParams } from "react-router-dom";

export function Profile() {
  const { profileName } = useParams();
  return (
    <div>
      <h3>Profile</h3>
      <span>Nome: {profileName}</span>
    </div>
  );
}
