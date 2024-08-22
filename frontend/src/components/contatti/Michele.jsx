import teamData from "./../../data/contatti.json";
import Profile from "./Profile";
function Michele() {
  const micheleData = teamData[1];
  return <Profile {...micheleData} />;
}

export default Michele;
