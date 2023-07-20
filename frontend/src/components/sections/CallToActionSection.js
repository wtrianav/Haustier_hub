import React from 'react'

function CallToActionSection() {
    return (
        <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4 fw-bold">¿Listo para comenzar?<br/>¡Regístrate ahora!</h2>
                        <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                            <div className="row">
                                <div className="col">
                                    <input className="form-control form-control-call" id="emailAddressBelow" type="email"
                                        placeholder="Correo electrónico" data-sb-validations="required,email" />
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">El
                                        Correo electrónico es requerido.</div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Correo
                                        electrónico no válido.</div>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary btn-lg rounded-pill" id="submitButton" type="submit">Enviar</button>
                                </div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    <p>To activate this form, sign up at</p>
                                    <a className="text-white"
                                        href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Error sending message!</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToActionSection;
