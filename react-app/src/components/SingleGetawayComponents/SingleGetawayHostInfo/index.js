export const SingleGetawayHostInfo = ({currentGetaway}) => {
    return (
        <div>
        <span>{`Hosted by ${currentGetaway.hostFirstName}`}</span>
        <img className="singleGetawayPageProfilePicture" src={`${currentGetaway.hostProfilePicture}`} alt="Getaway Host" />
        </div>
    )
}
