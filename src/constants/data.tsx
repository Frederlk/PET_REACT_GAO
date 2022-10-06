import { IStep } from "../models/models";
import { AboutStep, FinalStep, HubStep, InterestedStep, ObjectiveStep, ProfileStep } from "../_containers";

export enum stepsNames {
    HUB = "Hub",
    OBJECTIVES = "Objectives",
    PROFILE = "Profile",
    INTERESTS = "Interests",
    ABOUT = "About",
    FINAL = "Final",
}

export const steps: IStep[] = [
    {
        step: stepsNames.HUB,
        icon: "_icon-location",
        component: <HubStep />,
    },
    {
        step: stepsNames.OBJECTIVES,
        icon: "_icon-crown",
        component: <ObjectiveStep />,
    },
    {
        step: stepsNames.PROFILE,
        icon: "_icon-frame",
        component: <ProfileStep />,
    },
    {
        step: stepsNames.INTERESTS,
        icon: "_icon-heart",
        component: <InterestedStep />,
    },
    {
        step: stepsNames.ABOUT,
        icon: "_icon-user-tag",
        component: <AboutStep />,
    },
];
