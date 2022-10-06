import { FC } from "react";
import { Helmet } from "react-helmet";
import { Logo } from "../_components";
import { Buttons, Form } from "../_containers";

const RegistrationPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Registration" content="Registration" />
                <title>Registration</title>
            </Helmet>

            <section className="form-page">
                <div className="form-page__container">
                    <div className="form-page__content">
                        <Logo />

                        <Form />

                        <Buttons />
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegistrationPage;
