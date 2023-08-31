
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


export const formatDate = (date: string | number) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    // console.log("newDate", newDate, "day", day, "month", month, "year", year);
    return `${day} ${months[month-1]} ${year}`;
};

export const formatDate2 = (date: number | string) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    // console.log("newDate", newDate, "day", day, "month", month, "year", year);
    return `${day}-${month}-${year}`;
};
  
  
  