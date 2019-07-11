export const parseDate = date => {
    const parts = String(date).split(" ");
    const months = {
        "Jan": "January",
        "Feb": "February",
        "Mar": "March",
        "Apr": "April",
        "May": "May",
        "Jun": "June",
        "Jul": "July",
        "Aug": "August",
        "Sep": "September",
        "Oct": "October",
        "Nov": "November",
        "Dec": "December"
    }
    
    const month = months[parts[1]];
    const day = parts[2];
    const year = parts[3];

    return `${month} ${day}, ${year}`;
}