export const parseDate = date => {
    const parts = date.split(" ");
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
    const time = parts[4];
    const zone = parts[5];

    return `${month} ${day}, ${year} ${time} ${zone}`;
}