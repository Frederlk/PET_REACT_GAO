import { ChangeEvent, FC, memo, useCallback, useContext, useState } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { Input, Picture, Spinner } from "../../_components";
import { FormContext } from "../Form";

const ProfileStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);
    const [pic, setPic] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { setFieldValue } = useContext(FormContext);

    const onImageUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const img = e.target.files[0];
            if (img) {
                setIsLoading(true);
                const imageRef = ref(storage, `profileImages/${img.name + v4()}`);
                uploadBytes(imageRef, img).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        setPic(url);
                        setFieldValue("profilePic", url);
                    });
                    setIsLoading(false);
                });
            }
        }
    }, []);

    return (
        <div className={`step profile-step ${step === stepsNames.PROFILE ? "_active" : ""}`}>
            <div className="top">
                <h3 className="title">Fill Your Profile</h3>
                <p className="text">
                    This basic information will be shown to your matches every week. Tell us what you would
                    like to show!
                </p>
            </div>
            <div className="profile-step__body">
                <label className={`profile-step__file ${isLoading ? "_loading" : ""}`}>
                    <input
                        type="file"
                        name="profilePic"
                        className="profile-step__file-input"
                        onChange={onImageUpload}
                    />
                    <div className="profile-step__image-ibg">
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            pic && <Picture srcWebp={pic} fallbackSrc={pic} alt="Profile Pic" />
                        )}
                    </div>
                    {!isLoading && <p className="profile-step__file-text _icon-gallery">Upload Your Photo</p>}
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

export default memo(ProfileStep);
