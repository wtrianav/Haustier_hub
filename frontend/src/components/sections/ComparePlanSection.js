import React from "react";
import styled from "styled-components";
import CheckIcon from "../iconStyle/CheckIcon";
import XmarkIcon from "../iconStyle/XmarkIcon";


const TableHead = styled.thead` 
    tr {
        th {
            background-color: #0d6efd;
            color: #ffff;
            width: 18%;
        }
    }

`;

function ComparePlanSection() {
	return (
        <section className="container">
            <div className="mt-5 mb-5">
                <h2 className="fw-bold text-center mb-4">Compara nuestros planes</h2>
                <div className="table-responsive">
                    <table className="table text-center">
                        <TableHead>
                            <tr>
                                <th></th>
                                <th>Haustier Basic</th>
                                <th>Haustier Local</th>
                                <th>Haustier Nacional</th>
                                <th>Haustier Plus</th>
                            </tr>
                        </TableHead>
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
