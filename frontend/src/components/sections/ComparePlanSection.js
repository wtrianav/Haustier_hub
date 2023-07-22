import React from "react";
import CheckIcon from "../iconStyle/CheckIcon";
import XmarkIcon from "../iconStyle/XmarkIcon";

function ComparePlanSection() {
	return (
        <section className="container">
            <div className="mt-5 mb-5">
                <h2 className="fw-bold text-center mb-4">Compara nuestros planes</h2>
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead className="thead-table">
                            <tr>
                                <th style={{width: "18%"}}></th>
                                <th style={{width: "18%"}}>Haustier Basic</th>
                                <th style={{width: "18%"}}>Haustier Local</th>
                                <th style={{width: "18%"}}>Haustier Nacional</th>
                                <th style={{width: "18%"}}>Haustier Plus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Urgencias 24/7</th>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Consultas gratuitas</th>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Chequeos preventivos</th>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Beneficios trimestrales</th>
                                <td><XmarkIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Orientación permanente</th>
                                <td><XmarkIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Domicilio Grátis</th>
                                <td><XmarkIcon /></td>
                                <td><XmarkIcon /></td>
                                <td><CheckIcon /></td>
                                <td><CheckIcon /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Portafolio de descuentos</th>
                                <td><XmarkIcon /></td>
                                <td><XmarkIcon /></td>
                                <td><XmarkIcon /></td>
                                <td><CheckIcon /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default ComparePlanSection;
