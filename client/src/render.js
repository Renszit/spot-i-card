import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./axios";
import ReactPlayer from "react-player";
import { animateScroll as scroll } from "react-scroll";

export default function Render() {
    let params = useParams();
    const [id, setId] = useState();
    const [lyrics, setLyrics] = useState();
    const [fonts, setFonts] = useState("Poiret One");
    const [url, setUrl] = useState();
    const [artist, setArtist] = useState();
    const [youtubelink, setYoutube] = useState();
    const [track, setTrack] = useState();

    useEffect(() => {
        {
            !id &&
                axios
                    .get("/app/shared/" + params.id)
                    .then((res) => {
                        console.log("response", res);
                        const {
                            url,
                            track,
                            lyrics,
                            artist,
                            fonts,
                            youtube,
                            id,
                        } = res.data;
                        setUrl(url);
                        setTrack(track);
                        setLyrics(lyrics);
                        setArtist(artist);
                        setFonts(fonts);
                        setYoutube(youtube);
                        setId(id);
                        scroll.scrollTo(200);
                    })
                    .catch((err) =>
                        console.log("getting image in render failed", err)
                    );
        }
    }, [id]);

    // if (!url || !lyrics || !track || !youtubelink || !artist || !fonts || !id) {
    //     return null;
    // }

    return (
        <div>
            <div className="container">
                <h1>
                    {track} by {artist}
                </h1>

                <div className="imageWrapper">
                    <a href={youtubelink}>
                        <img
                            className="renderImage"
                            src={url}
                            alt="image"
                        ></img>
                    </a>
                    <p style={{ fontFamily: fonts }} className="apply-font">
                        {lyrics}
                    </p>
                </div>
                <div className="youtubeVideo">
                    <ReactPlayer url={youtubelink} />
                </div>
            </div>
        </div>
    );
}





// The stack - particaler projects at spiced
// cliump 
// curiousity is important -> highlight your career change in this
// highlight the working hours
// work out more examples about technologies
// create a master cover letter
// company values
// see what people want