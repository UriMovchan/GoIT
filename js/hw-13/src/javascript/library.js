const ajax = async (url) => {   
    const result = await fetch(url);

    if (!result.ok) throw result;

    return await result.json();
}

export { ajax }