export const toArray = restaurants => (
    Object.keys(restaurants).map(id => restaurants[id])
);