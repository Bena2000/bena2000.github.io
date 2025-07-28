import React, { useState } from "react";

interface Props {
    imagesPaths: string[]
}

export const Slideshow: React.FC<Props> = ({ imagesPaths }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function getImageButton(index: number) {
        return <button key={index} style={{ width: "20px", height: "20px" }} onClick={() => setCurrentIndex(index)} />
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "90%" }}>
                <img
                    src={imagesPaths[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{ maxWidth: "100%", objectFit: "cover" }}
                />
            </div>
            {
                imagesPaths.length <= 1 ?
                    "" :
                    <div style={{ height: "10%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px", paddingTop: "10px" }}>
                        {imagesPaths.map((_, index) => getImageButton(index))}
                    </div>
            }
        </div>
    );
};