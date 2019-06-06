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