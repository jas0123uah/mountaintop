export const UploadImage = ({imageSetter})=>{
  return(
     <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input className="IMGS" type="file" name="imgUrl" id=""  onChange={(e)=>{imageSetter(e.target.files[0])}}/>
      </div>)
}
