export const SingleGetawayRoomInfo = ({currentGetaway}) => {
    const guestOrGuests = currentGetaway.numGuests>1 ? "guests":"guest"
    const bedroomOrBedrooms = currentGetaway.numBedrooms>1 ? "bedrooms":"bedroom"
    const bedOrBeds = currentGetaway.numBeds>1 ? "beds":"bed"
    const bathOrBaths = currentGetaway.numBaths>1 ? "baths":"bath"
    return (
        <h3>{`${currentGetaway.numGuests} ${guestOrGuests} | ${currentGetaway.numBedrooms} ${bedroomOrBedrooms} | ${currentGetaway.numBeds} ${bedOrBeds} | ${currentGetaway.numBaths} ${bathOrBaths}`}</h3>
    )
}
