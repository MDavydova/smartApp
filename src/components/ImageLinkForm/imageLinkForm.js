import React from "react";
import './imageLinkForm';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className="f3">
                This Magic Brain will detect faces in your pictures.
            </p>
            <p className="f3">
                Please choose a non-copyrighted, JPG image.
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5 form'>
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                    <button className="w-30 grow f4 link pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;
