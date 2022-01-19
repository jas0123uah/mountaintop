export const AverageReviewsBox = ({averageCleanliness, averageAccuracy, averageCommunication, averageLocation, averagecheckIn, averageValue})=>{
    return(
<div className="ratings-grid">
            <div className="rating-container">
                <span className="rating-category">Cleanliness</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageCleanliness}></meter>
                    <span className="rating-num">{averageCleanliness}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Accuracy</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageAccuracy}></meter>
                    <span className="rating-num">{averageAccuracy}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Communication</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageCommunication}></meter>
                    <span className="rating-num">{averageCommunication}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Location</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageLocation}></meter>
                    <span className="rating-num">{averageLocation}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Check-in</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averagecheckIn}></meter>
                    <span className="rating-num">{averagecheckIn}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Value</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageValue}></meter>
                    <span className="rating-num">{averageValue}</span>
                </div>
            </div>
            


        </div>)
}
