"use client"
import React from "react";
export default function Testimonial() {
    return (
        <>
       <div className="container-fluid">
  <div className="row g-4">

    {/* Testimonial 1 */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow-lg p-3">
        <div className="d-flex align-items-center">
          <img src="./team/3.jpg" alt="User" width={60} height={60} className="rounded-circle me-3" />
          <div>
            <h5 className="font-bold">Good Support!</h5>
            <p className="text-muted">Kolis Mullar</p>
          </div>
        </div>
        <p className="mt-3">
          They provide great service, facility, and support. Consectetur adipisicing elit. Itaquerem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit.
        </p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow-lg p-3">
        <div className="d-flex align-items-center">
          <img src="./team/4.jpg" alt="User" width={60} height={60} className="rounded-circle me-3" />
          <div>
            <h5 className="font-bold">Nice Environment!</h5>
            <p className="text-muted">Partho Sarothi</p>
          </div>
        </div>
        <p className="mt-3">
          They provide great service, facility, and a comfortable environment. Consectetur adipisicing elit. Itaquerem, praesentium, iure, ipsum magnam deleniti a vel suscipit.
        </p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow-lg p-3">
        <div className="d-flex align-items-center">
          <img src="./team/2.jpg" alt="User" width={60} height={60} className="rounded-circle me-3" />
          <div>
            <h5 className="font-bold">Amazing Experience!</h5>
            <p className="text-muted">Anita Joshi</p>
          </div>
        </div>
        <p className="mt-3">
          The experience was amazing! The services provided were of high quality, and the team was very supportive throughout. Highly recommend!
        </p>
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow-lg p-3">
        <div className="d-flex align-items-center">
          <img src="./team/1.jpg" alt="User" width={60} height={60} className="rounded-circle me-3" />
          <div>
            <h5 className="font-bold">Professional Team!</h5>
            <p className="text-muted">Ravi Singh</p>
          </div>
        </div>
        <p className="mt-3">
          The professionalism and attention to detail were outstanding. I am extremely satisfied with the service and would definitely return.
        </p>
      </div>
    </div>

    {/* Testimonial 5 */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow-lg p-3">
        <div className="d-flex align-items-center">
          <img src="./team/2.jpg" alt="User" width={60} height={60} className="rounded-circle me-3" />
          <div>
            <h5 className="font-bold">Highly Recommended!</h5>
            <p className="text-muted">Sita Devi</p>
          </div>
        </div>
        <p className="mt-3">
          Highly recommended for anyone looking for top-notch service. The team exceeded my expectations, and I will definitely be back!
        </p>
      </div>
    </div>

  </div>
</div>

      
        </>
    )
}    