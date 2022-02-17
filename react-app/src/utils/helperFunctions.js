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

export const getAverageReviewRating = (getaway)=> {
  const arrayOfReservations=Object.values(getaway.reservations)
  let numReviews = 0
  let totalOverallRating = 0
  let totalCleanliness = 0
  let totalCommunication = 0
  let totalCheckin = 0
  let totalAccuracy = 0
  let totalLocation = 0
  let totalValue = 0
  arrayOfReservations.forEach(reservation => {
    if (reservation.overallRating) {
      totalOverallRating+=reservation.overallRating
      totalCleanliness+=reservation.cleanlinessRating
      totalCommunication+=reservation.communicationRating
      totalCheckin+=reservation.checkinRating
      totalAccuracy+=reservation.accuracyRating
      totalLocation+=reservation.locationRating
      totalValue+=reservation.valueRating
      
      numReviews++;
    }
  })
let avgRating = (totalOverallRating / numReviews).toFixed(2)
totalCleanliness = (totalCleanliness/numReviews).toFixed(1)
totalCommunication = (totalCommunication/numReviews).toFixed(1)
totalCheckin = (totalCheckin/numReviews).toFixed(1)
totalAccuracy = (totalAccuracy/numReviews).toFixed(1)
totalLocation = (totalLocation/numReviews).toFixed(1)
totalValue = (totalValue/numReviews).toFixed(1)
if (isNaN(avgRating)) {
  avgRating = 0
  
}

if (isNaN(totalCleanliness)) {
        totalCleanliness = 0
        
    }
    if (isNaN(totalCommunication)) {
        totalCommunication = 0
        
    }

    if (isNaN(totalCheckin)) {
        totalCheckin = 0
        
    }
    if (isNaN(totalAccuracy)) {
        totalAccuracy = 0
        
    }
    if (isNaN(totalLocation)) {
        totalLocation = 0
        
    }
    if (isNaN(totalValue)) {
        totalValue = 0
        
    }
return [avgRating, numReviews, totalCleanliness, totalCommunication, totalCheckin, totalAccuracy, totalLocation, totalValue]
}
export const getReviewObjects =(userId, getaway) => {
  const reviewObjArray = []
  const arrayOfReservations=Object.values(getaway.reservations)
  arrayOfReservations.forEach(reservation => {
    if (reservation.overallRating) {
      reviewObjArray.push(reservation)
    }
  })
  if (userId) {
    reviewObjArray.sort(
      function (a, b) {

        if (a.userId ==userId && b.userId != userId) {
          return -1
          
        }
        if (b.userId == userId && a.userId != userId) {
          return 1
          
        }
        if (a.userId == userId && b.userId == userId) {
          return new Date(a.startDate)  > new Date(b.startDate) ? -1 : 1
          
        }
        if (a.userId!=userId && b.userId!=userId) {
          return new Date(a.startDate)  > new Date(b.startDate) ? -1 : 1
          
        }

        // if((a.userId) ==  (userId)) {  
        //   if (a.userId == b.userId) {
        //      return new Date(a.startDate)  > new Date(b.startDate) ? -1 : 1
  
        //   }else{
        //     return -1
        //   }
        // }
        
        // // return new Date(a.startDate) < new Date(b.startDate)
        // return new Date(a.startDate) >  new Date(b.startDate) ? -1 : 1
      }
    )
  }else{

    reviewObjArray.sort(
      function (a, b) {
        if(new Date(a.startDate) > (b.startDate)){ return 1;}
        else{ return -1;}
      
        // if (a.userId === b.userId) {
        //   return (new Date(b.startDate > a.startDate))
        // }
      }
    )

  }
  return reviewObjArray 


}


export const getGetawayImagesArray = (getaway) => {
  const getawayImages=[]

  Object.values(getaway.images).forEach((image) => {
    getawayImages.push( {"src": image.url})
  })
  return getawayImages
}


export const getNumDaysBetweenDates = (startDate, endDate) =>{
  if(!startDate || !endDate){
    return null
  }
  const differenceInTime = endDate.getTime() - startDate.getTime()
  return ((differenceInTime/ (1000*3600*24)) + 1)


}

export const getTotalPrice = (startDate, endDate, pricePerNight) =>{
  const numDays = getNumDaysBetweenDates(startDate, endDate)
  return numDays * pricePerNight
} 

export const getMonthandYear = (date) => {
  const dateAsDateObject = new Date(date)
  if (!dateAsDateObject){
    return null
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

  const startDateString =  monthNames[dateAsDateObject.getMonth()] + ' ' + dateAsDateObject.getFullYear()

  return startDateString
}
export const checkURL = (url) => {
    return(url.match(/\.(jpeg|jpg|png|.img)/) != null);
}

export const checkURLisReachable =(url) =>{
const request = new XMLHttpRequest();
try {
  request.open('GET', url, false);
  request.send(); 
  if (request.status === 200) {
    return true;
    
  }else{
    return false;
  }
  
} catch (error) {
  return false;
}
}
export const throttle = (func, duration) => {
  let shouldWait = false
  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args)
      shouldWait = true
      setTimeout(function () {
        shouldWait = false
      }, duration)
    }
  }
}
