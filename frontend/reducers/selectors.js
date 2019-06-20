export const toArray = obj => (
    Object.keys(obj).map(id => obj[id])
);