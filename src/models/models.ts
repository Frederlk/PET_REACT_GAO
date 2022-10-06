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
