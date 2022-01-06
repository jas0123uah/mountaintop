export const getDatesBetween = (startDate, stopDate) => {
    const dateArray = new Array();
    let currentDate = new Date(startDate);
    let endDate = new Date(stopDate);


    while (currentDate <= endDate) {
        currentDate.setHours(0,0,0,0);
        
        dateArray.push(new Date (currentDate).toString());
        currentDate.setDate(currentDate.getDate()+1);
    }
    dateArray.push(endDate.toString())
    return dateArray;
}

export const getBookedDays=(getaways, getawayId) =>{
  const bookedDays = [];

  const reservations = Object.values(getaways[getawayId].reservations)
  reservations.forEach( reservation => {
    bookedDays.push(new Date(reservation.startDate).toString())
    bookedDays.push(...getDatesBetween(reservation.startDate, reservation.endDate))
  })
  return bookedDays

}


export const removeBookedDays = (date, getaways, getawayId) => {
  let bookedDays = getBookedDays(getaways, getawayId)
  let dateasString = date.toString()
  return !bookedDays.includes(dateasString)


}
