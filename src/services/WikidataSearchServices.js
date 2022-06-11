import http from "../http-common";

const findByTitle = async(title) => {
  const result = await http.get(`/info/${title}`);
  console.log("THe result " , result.data);
  return JSON.stringify(result.data); 
};

const WikidataSearchServices = {
  findByTitle
};

export default WikidataSearchServices;
