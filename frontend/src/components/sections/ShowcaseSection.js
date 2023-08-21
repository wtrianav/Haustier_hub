import React from 'react'

function ShowcaseSection() {
    return (
        <section className="showcase" id="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url('images/veterinarian-2.jpg')` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2 className="fw-bold">Servicio y atención de urgencias 24/7</h2>
                        <p className="fs-5 text-muted mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url('images/veterinarian-25.jpg')` }}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2 className="fw-bold">Consultas veterinarias gratuitas en sedes aliadas</h2>
                        <p className="fs-5 text-muted mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url('images/veterinarian-19.jpg')` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2 className="fw-bold">Domicilios gratis para la entrega de productos</h2>
                        <p className="fs-5 text-muted mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
