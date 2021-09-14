const ajax = async (params) => {
  const { url } = params;

  const result = await fetch(url);
  return result.ok ? await result.json() : console.log("error", result);
};

export default ajax;
