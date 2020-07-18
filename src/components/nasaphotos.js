import React, { useState, useEffect } from 'react';
import NavBar from "./navbar";

const apiKey = process.env.REACT_APP_NASA_API_KEY;



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
        <>
        <NavBar />
        <div>
            

            {PhotoData.media_type === 'image' ? (
            <img src={PhotoData.url} alt={PhotoData.title} />
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
            <div>
    <h1>{PhotoData.title}</h1>
    <p>{PhotoData.date}</p>
    <p>{PhotoData.explanation}</p>
    <p>{PhotoData.copyright}</p>
            </div>

        </div>
    </>
    );

}



export default NasaPhotos;