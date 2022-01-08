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
export const getAmenitiesObjectForGetaway = (getaway) => {
const amenityObjArray = Object.values(getaway.amenities)
  const amenitiesObject ={'HotTub': false, 'Wifi': false, 'Fireplace': false, 'Kitchen': false, 'Patio' : false}
  amenityObjArray.forEach(amenityObj => {
    if (amenityObj.amenity =="Hot Tub") {
      amenitiesObject['HotTub'] = true;
    }
    if (amenityObj.amenity =="Wifi") {
      amenitiesObject['Wifi'] = true;
    }
    if (amenityObj.amenity =="Fireplace") {
      amenitiesObject['Fireplace'] = true;
    }
    if (amenityObj.amenity =="Kitchen") {
      amenitiesObject['Kitchen'] = true;
    }
    if (amenityObj.amenity =="Patio") {
      amenitiesObject['Patio'] = true;
    }
  })
  return amenitiesObject
}

export const getDesiredAmenities = (hasHotTub, hasWifi, hasPatio, hasFireplace, hasKitchen) =>{
  return ({
    'HotTub':hasHotTub,
    'Wifi':hasWifi,
    'Fireplace':hasFireplace,
    'Kitchen':hasKitchen,
    'Patio':hasPatio
  })
}

export const compareDesiredAmenitiesToCurrentGetawaysAmenities =  (desiredAmenities, currentGetaway) => {
  const currentGetawayAmenities = getAmenitiesObjectForGetaway(currentGetaway)
  for (const [key, value] of Object.entries(desiredAmenities)) {
    if (value == true && currentGetawayAmenities[key] == false ) {
      console.log(key, value, "AINT GOT IT");
      return false}}
  return true

}

export const getAmenitiesJSONForGetaway = (getaway) => {
  const amenityObjArray = Object.values(getaway.amenities)
  const amenitiesObject ={'HotTub': false, 'Wifi': false, 'Fireplace': false, 'Kitchen': false, 'Patio' : false}
  amenityObjArray.forEach(amenityObj => {
    if (amenityObj.amenity =="Hot Tub") {
      amenitiesObject['HotTub'] = true;
    }
    if (amenityObj.amenity =="Wifi") {
      amenitiesObject['Wifi'] = true;
    }
    if (amenityObj.amenity =="Fireplace") {
      amenitiesObject['Fireplace'] = true;
    }
    if (amenityObj.amenity =="Kitchen") {
      amenitiesObject['Kitchen'] = true;
    }
    if (amenityObj.amenity =="Patio") {
      amenitiesObject['Patio'] = true;
    }
  })
  return JSON.stringify(amenitiesObject)
}


//Need to get Object of amenities desired for

//Need to get Object of amenities getaways has

//Use a fn to iterate over desired for and compare to has
