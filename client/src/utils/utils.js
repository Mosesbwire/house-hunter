
export function saveToSessionStorage(key, value) {
    const val = JSON.stringify(value)
    sessionStorage.setItem(key, val);
}

export function getItemFromSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key));
}