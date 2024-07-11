import { BaseAxios } from "@/lib";

export const getAllClasses = (
  page: number,
  limit: number,
  subjectId: number[],
  eduLevelId: number[],
  require: number[],
  locationId: number[]
) => {
  const axios = new BaseAxios();
  let url = "class?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  subjectId.forEach((i) => (url += `&subjectId=${i}`));
  eduLevelId.forEach((i) => (url += `&eduLevelId=${i}`));
  require.forEach((i) => (url += `&require=${i}`));
  locationId.forEach((i) => (url += `&locationId=${i}`));
  return axios.get(url);
};

export const getClassById = (id: number) => {
  const axios = new BaseAxios();
  return axios.get(`class/${id}`);
};

export const getAllSubject = (page: number, limit: number) => {
  const axios = new BaseAxios();
  let url = "subject?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  return axios.get(url);
};

export const getAllEduLevel = (page: number, limit: number) => {
  const axios = new BaseAxios();
  let url = "edu-level?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  return axios.get(url);
};

export const getAllLocation = (page: number, limit: number) => {
  const axios = new BaseAxios();
  let url = "location?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  return axios.get(url);
};
