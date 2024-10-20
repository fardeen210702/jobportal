import axios from "axios";

const getJobs = async (URL, contextPath) => {
  let result = null;
  await axios
    .get(URL + contextPath)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

const saveVisitor = async (request) => {
  const VISITORS_BASE_URL = import.meta.env.VITE_REACT_APP_SAVE_VISITOR;
  await axios
    .post(VISITORS_BASE_URL, request)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error saving the visitor", error);
    });
};

export { getJobs, saveVisitor };
