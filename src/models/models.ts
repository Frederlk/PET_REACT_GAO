import { ReactNode } from "react";

export interface IStep {
    step: string;
    icon: string;
    component: ReactNode;
}
export interface IHub {
    img: string;
    webp: string;
    title: string;
    popular: boolean;
}

export interface IUser {
    hub: string;
    objectives: string[];
    profilePic: string;
    linkedInUrl: string;
    twitterUrl: string;
    interests: string[];
    firstName: string;
    lastName: string;
    about: string;
}
