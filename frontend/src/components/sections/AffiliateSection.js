import React from "react";
import styled from 'styled-components';
import empresa1 from "../../assets/Affiliates/Empresa1.jpg";
import empresa2 from "../../assets/Affiliates/Empresa2.jpg";
import empresa3 from "../../assets/Affiliates/Empresa3.jpg";
import empresa4 from "../../assets/Affiliates/Empresa4.jpg";

const AffiliateImage = styled.img`
    width: 14rem;
`;

function AffiliateSection() {

	return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-3 fw-bold">Empresas asociadas</h2>
                <p className="fs-5 text-muted mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <AffiliateImage src={empresa1} alt="Empresa 1" className="img-fluid"/>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <AffiliateImage src={empresa4} alt="Empresa 4" className="img-fluid"/>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <AffiliateImage src={empresa3} alt="Empresa 3" className="img-fluid"/>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <AffiliateImage src={empresa2} alt="Empresa 2" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AffiliateSection;
