import React, { useEffect, useState } from "react";

interface Props {
    images: string[]
}

export const Slideshow: React.FC<Props> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{}}>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
        </div>
    );
};