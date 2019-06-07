export const numDollars = (priceRange) => {
    switch(priceRange) {
        case "$30 and under":
            return "$$";
        case "$31 to $50":
            return "$$$";
        case "$51 and over":
            return "$$$$";
    }
}

export const recRate = () => {
    const range = Math.floor(Math.random() * 45);
    return (100 - range).toString().concat("%");
}

export const parseTime = (time) => {
    const hour = time.slice(0, 2) % 12;
    const min = time.slice(3, 5)

    return `${hour}:${min}`
}