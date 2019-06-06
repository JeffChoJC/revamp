export const today = () => {
    const months = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
    }

    const day = new Date();
    const month = months[day.getMonth()];
    const date = day.getDay();
    const year = day.getFullYear();

    return `${month} ${date}, ${year}`;
}