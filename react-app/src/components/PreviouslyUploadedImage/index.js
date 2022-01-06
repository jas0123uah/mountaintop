export const PreviouslyUploadedImage = ({src, imgNum, removeOldImage}) =>{
    return(
    <div className={`containerForPreviouslyUploadedImage-${imgNum} containerForPreviouslyUploadedImage`} data-imgnum={imgNum}>
    <img src={src} alt="" className={`previouslyUploadedImage-${imgNum} previouslyUploadedImage`}  />
    <i data-imgnum={imgNum} class="fa fa-times deleteImgBtn" id={`image-${imgNum}-deletebtn`} aria-hidden="true" onClick={(img) => {removeOldImage(img.currentTarget.dataset.imgnum)}}>

    </i>
    </div>)
}
