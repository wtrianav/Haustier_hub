import React from "react";
import empresa1 from "../../assets/Affiliates/Empresa1.jpg";
import empresa2 from "../../assets/Affiliates/Empresa2.jpg";
import empresa3 from "../../assets/Affiliates/Empresa3.jpg";
import empresa4 from "../../assets/Affiliates/Empresa4.jpg";

function AffiliateSection() {

	return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold">Empresas asociadas</h2>
                <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                    <img src={empresa1} alt="Empresa 1" className="img-fluid"/>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <img src={empresa4} alt="Empresa 4" className="img-fluid"/>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <img src={empresa3} alt="Empresa 3" className="img-fluid"/>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <img src={empresa2} alt="Empresa 2" className="img-fluid"/>
                </div>
                </div>
            </div>
        </section>
    );
}

export default AffiliateSection;
