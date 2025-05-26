const setKey = (key, value) => {
    document.cookie = `${key}=${encodeURIComponent(value)}; path=/`;
};

const getKey = (key) => {
    const value = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
    if (!value) {
        return undefined;
    }
    return decodeURIComponent(value[2]);
};

const removeKey = (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

export {setKey, getKey, removeKey};