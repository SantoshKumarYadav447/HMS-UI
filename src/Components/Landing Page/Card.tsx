"use client";
import React from 'react';
import { FaFlask, FaHeartbeat, FaTooth, FaCut, FaBrain, FaFemale } from 'react-icons/fa';

export default function Card() {
    return (
        <div className="container">
            <div className="row mx-5 my-5 g-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body bg-light shadow justify-content-center p-5">
                            <h4 className="card-title">
                                <FaFlask className="me-2 text-danger" /> Laboratory Services
                            </h4>
                            <p className="card-text">Quick overview of our laboratory services. A laboratory is a facility that provides controlled conditions in which scientific research can conducted.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body bg-light shadow justify-content-center p-5">
                            <h4 className="card-title">
                                <FaHeartbeat className="me-2 text-danger" /> Heart Disease
                            </h4>
                            <p className="card-text">Expert care for heart health. The heart is a muscular organ that pumps blood through the blood vessels scientific  circulatory system muscular organ that .</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body bg-light shadow justify-content-center p-5">
                            <h4 className="card-title">
                                <FaTooth className="me-2 text-danger" /> Dental Care
                            </h4>
                            <p className="card-text">Comprehensive dental services. Realtooth offers advanced braces and aligners from major companies scientific.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body bg-light shadow justify-content-center p-5">
                            <h4 className="card-title">
                                <FaCut className="me-2 text-danger" /> Body Surgery
                            </h4>
                            <p className="card-text">Advanced surgical procedures. Surgery is a medical treatment that involves making an opening in the body to treat various conditions .</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body bg-light shadow justify-content-center p-5">
                            <h4 className="card-title">
                                <FaBrain className="me-2 text-danger" /> Neurology Surgery
                            </h4>
                            <p className="card-text">Neurology is a medical specialty concerned with the nervous system and its functional or organic disorders scientific.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body bg-light shadow justify-content-center p-5">
                            <h4 className="card-title">
                                <FaFemale className="me-2 text-danger" /> Gynecology
                            </h4>
                            <p className="card-text">Comprehensive women's health services. Gynecology involves the treatment of women's diseases and reproductive health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
