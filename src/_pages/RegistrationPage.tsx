import { FC } from "react";
import { Helmet } from "react-helmet";
import { useAppSelector } from "../hooks/useRedux";
import { Logo } from "../_components";
import { FinalStep, Form } from "../_containers";

const RegistrationPage: FC = () => {
    const { user } = useAppSelector((state) => state.user);

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

                        {user ? <FinalStep /> : <Form />}
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegistrationPage;
