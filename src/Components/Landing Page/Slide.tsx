"use client";
import React from 'react';

export default function Slide() {
    return (
        <>
            {/* Slider Section */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./home_files/h1.jpg" className="d-block w-100 img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./home_files/h1.png" className="d-block w-100 img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./home_files/h4.png" className="d-block w-100 img" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}