export enum RequestMethod {
  get = "GET",
  post = "POST",
  patch = "PATCH",
  put = "PUT",
  delete = "DELETE",
}

export const apiFetch = async (
  url: string,
  method: RequestMethod,
  params = {}
) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const body = [RequestMethod.post, RequestMethod.patch].includes(method)
    ? JSON.stringify(params)
    : null;

  const result = await fetch(`https://hahow-recruit.herokuapp.com${url}`, { headers, method, body });
  return result.json();
};
