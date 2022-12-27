import {FC, useEffect, useState, useRef} from 'react';

//Defining props
interface Props{
    url: string;
    description: string;
}

const ImageCard: FC<Props> = ({ url, description }) => {
    const [numberOfSpans, setNumberOfSpans] = useState<number>(0);

    const imageRef = useRef<HTMLImageElement>(null);

    //Adding on load event listener to the image. When image is loaded run "setSpans" function
    useEffect(() => {
        imageRef.current?.addEventListener('load', setSpans)
    })

    //This function is reaching to the dom and checking the clientHight. Then it set number of spans to height/10 rounded to closest int
    const setSpans = () => {
        const height: number = imageRef.current?.clientHeight as number;
        const spans: number = Math.ceil(height/10);
        setNumberOfSpans(spans);
    }
    return(
        //gridRowEnd span(number) defines in how many spans will the image be displayed. Doing this allow us to display two small images next to one big image
        <div style={{gridRowEnd: `span ${numberOfSpans}`}}>
            <img src={url} alt={description} ref={imageRef}/>        
        </div>
    )
}

export default ImageCard;