const call = {
  get: async url => {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "GET",
    });

    return response;
  },

  post: async (url, data) => {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    return response;
  },
};

export default call;
