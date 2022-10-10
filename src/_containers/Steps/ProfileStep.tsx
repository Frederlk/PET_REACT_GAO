import { ChangeEvent, FC, useState } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { Input, Picture } from "../../_components";
import { Field } from "formik";

const ProfileStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);
    const [pic, setPic] = useState<string | null>(null);

    const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const img = e.target.files[0];
            const imageRef = ref(storage, `profileImages/${img.name + v4()}`);
            uploadBytes(imageRef, img).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPic(url);
                });
            });
        }
    };

    return (
        <div className={`form__step profile-step ${step === stepsNames.PROFILE ? "_active" : ""}`}>
            <div className="top">
                <h3 className="title">Fill Your Profile</h3>
                <p className="text">
                    This basic information will be shown to your matches every week. Tell us what you would
                    like to show!
                </p>
            </div>
            <div className="profile-step__body">
                <label className="profile-step__file">
                    <Field
                        type="file"
                        name="profilePic"
                        className="profile-step__file-input"
                        onChange={onImageUpload}
                    />
                    {pic && (
                        <div className="profile-step__image-ibg ">
                            <Picture srcWebp={pic} fallbackSrc={pic} alt="Profile Pic" />
                        </div>
                    )}
                    <p className="profile-step__file-text _icon-gallery">Upload Your Photo</p>
                </label>
                <div className="profile-step__inputs">
                    <div className="profile-step__label label">Other Profile</div>
                    <div className="profile-step__form input-form _icon-ln">
                        <Input
                            name="linkedInUrl"
                            autoComplete="off"
                            type="text"
                            placeholder="LinkedIn URL"
                            className="input-form__input"
                        />
                    </div>
                    <div className="profile-step__form input-form _icon-tw">
                        <Input
                            name="twitterUrl"
                            autoComplete="off"
                            type="text"
                            placeholder="Twitter URL"
                            className="input-form__input"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileStep;
