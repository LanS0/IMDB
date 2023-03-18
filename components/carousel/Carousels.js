import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousels(data){
    const [index, setIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [imageData, setImageData] = useState([])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(()=>{
      setImageData(data.data)
    }, [data])

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {imageData.map((slide) => (
            <Carousel.Item>
              <Image className='img-responsive' loading='lazy' width={150} height={200} alt={`images_${slide}`} src={slide}/>
            </Carousel.Item>
          ))}
        </Carousel>
      );
}