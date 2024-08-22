import teamData from "./../../data/contatti.json";
import Profile from "./Profile";
function Stefan() {
  const stefanData = teamData[0];
  return <Profile {...stefanData} />;
}

export default Stefan;
