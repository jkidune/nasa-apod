import React, { useState, useEffect } from 'react';
import NavBar from "./navbar";





function NasaPhotos() {
    const [ PhotoData, setPhotoData ] = useState(null);

    useEffect(() => {

        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch (
                `https://api.nasa.gov/planetary/apod?api_key=7EguOoMUVljaiMZIA4YRMWpyh6ygkwydWe9Y3vOK`
            );

            const data = await res.json();
            setPhotoData(data);

            console.log(data);
        }



    }, [])


    if(!PhotoData) return <div/>;

    return(
        <div>
        <NavBar />
        <div className="nasa-image">
            

            {PhotoData.media_type === 'image' ? (
            <img src={PhotoData.url} alt={PhotoData.title} className="image" />
            )
             : (
                <iframe
                title="space-video"
                src={PhotoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                />
            )}
            <div className="description">
    <h1 className="title-image">{PhotoData.title}</h1>
    <p className="date">{PhotoData.date}</p>
    <p className="explanation">{PhotoData.explanation}</p>
    <p className="copyright">{PhotoData.copyright}</p>
            </div>

        </div>
    </div>
    );

}



export default NasaPhotos;