import axios from "axios";
const getJobs = async () => {
  const response = await axios("https://www.mshb.ir/api/db.json");
  return response.data.jobs;
};

export default getJobs;
