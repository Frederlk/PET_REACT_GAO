import { ChangeEvent, FC, useEffect, useState } from "react";
import { stepsNames } from "../../constants/data";
import { useAppSelector } from "../../hooks/useRedux";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { Picture } from "../../_components";

const ProfileStep: FC = () => {
    const { step } = useAppSelector((state) => state.steps);
    const [imageList, setImageList] = useState<any>([]);

    const imageListref = ref(storage, "profileImages");

    const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const img = e.target.files[0];
            const imageRef = ref(storage, `profileImages/${img.name + v4()}`);
            uploadBytes(imageRef, img).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev: string[]) => [...prev, url]);
                });
            });
        }
    };

    useEffect(() => {
        listAll(imageListref).then((res) =>
            res.items.map((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev: string[]) => [...prev, url]);
                });
            })
        );
    }, []);

    return (
        <div className={`form__step profile-step ${step === stepsNames.PROFILE ? "_active" : ""}`}>
            <div className="profile-step__top top">
                <h3 className="top__title title">Fill Your Profile</h3>
                <p className="top__text text">
                    This basic information will be shown to your matches every week. Tell us what you would
                    like to show!
                </p>
            </div>
            <div className="profile-step__body">
                <label className="profile-step__file">
                    <input type="file" className="profile-step__file-input" onChange={onImageUpload} />
                    <div className="profile-step__image">
                        <img src="@img/icons/gallery.svg" alt="Gallery Icon" />
                    </div>
                    <div className="profile-step__file-text">Upload Your Photo</div>
                </label>
                <div className="profile-step__inputs">
                    <div className="profile-step__label label">Other Profile</div>
                    <div className="profile-step__form input-form">
                        <div className="input-form__icon input-icon">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="#747887"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5.78341 4.16668C5.78319 4.6087 5.60738 5.03254 5.29466 5.34494C4.98195 5.65735 4.55793 5.83273 4.11591 5.83251C3.67388 5.83229 3.25004 5.65648 2.93764 5.34377C2.62524 5.03105 2.44985 4.60704 2.45007 4.16501C2.45029 3.72298 2.6261 3.29915 2.93882 2.98674C3.25153 2.67434 3.67555 2.49896 4.11757 2.49918C4.5596 2.4994 4.98344 2.6752 5.29584 2.98792C5.60825 3.30064 5.78363 3.72465 5.78341 4.16668ZM5.83341 7.06668H2.50007V17.5H5.83341V7.06668ZM11.1001 7.06668H7.78341V17.5H11.0667V12.025C11.0667 8.97501 15.0417 8.69168 15.0417 12.025V17.5H18.3334V10.8917C18.3334 5.75001 12.4501 5.94168 11.0667 8.46668L11.1001 7.06668Z" />
                            </svg>
                        </div>
                        <input
                            autoComplete="off"
                            type="text"
                            name="LinkedIn URL"
                            data-error="Please, type your hub"
                            placeholder="LinkedIn URL"
                            className="input-form__input input"
                        />
                    </div>
                    <div className="profile-step__form input-form">
                        <div className="input-form__icon input-icon">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="#747887"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18.4683 4.71333C17.8321 4.99474 17.1574 5.17956 16.4666 5.26167C17.1947 4.82619 17.7397 4.14085 17.9999 3.33333C17.3166 3.74 16.5674 4.025 15.7866 4.17917C15.2621 3.61798 14.5669 3.2458 13.809 3.12049C13.0512 2.99517 12.2732 3.12374 11.596 3.48621C10.9187 3.84868 10.3802 4.42474 10.0642 5.12483C9.74812 5.82492 9.67221 6.60982 9.84825 7.3575C8.46251 7.28805 7.10686 6.92794 5.86933 6.30055C4.63179 5.67317 3.54003 4.79254 2.66492 3.71583C2.35516 4.24788 2.19238 4.85269 2.19326 5.46833C2.19326 6.67667 2.80826 7.74417 3.74326 8.36917C3.18993 8.35175 2.64878 8.20232 2.16492 7.93333V7.97667C2.16509 8.78142 2.44356 9.56135 2.95313 10.1842C3.46269 10.8071 4.17199 11.2346 4.96075 11.3942C4.4471 11.5334 3.90851 11.5539 3.38576 11.4542C3.60814 12.1469 4.04159 12.7527 4.62541 13.1868C5.20924 13.6209 5.9142 13.8615 6.64159 13.875C5.91866 14.4428 5.0909 14.8625 4.20566 15.1101C3.32041 15.3578 2.39503 15.4285 1.48242 15.3183C3.0755 16.3429 4.93 16.8868 6.82409 16.885C13.2349 16.885 16.7408 11.5742 16.7408 6.96833C16.7408 6.81833 16.7366 6.66667 16.7299 6.51833C17.4123 6.02514 18.0013 5.41418 18.4691 4.71417L18.4683 4.71333Z" />
                            </svg>
                        </div>
                        <input
                            autoComplete="off"
                            type="text"
                            name="Twitter URL"
                            data-error="Please, type your hub"
                            placeholder="Twitter URL"
                            className="input-form__input input"
                        />
                    </div>
                </div>
            </div>
            {imageList.map((url: string) => {
                return <Picture key={url} srcWebp={url} fallbackSrc={url} alt={url} />;
            })}
        </div>
    );
};

export default ProfileStep;