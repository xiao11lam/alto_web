import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {

  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img src="landing1-personalized-care.svg" alt="iphone" className="max-w-xl rounded-3xl mx-auto" />
          </div>

          <div className="text-center lg:text-left">
            {/*<Typography*/}
            {/*  color="blue"*/}
            {/*  className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"*/}
            {/*>*/}
            {/*  Personalised care in an overwhelmed system*/}
            {/*</Typography>*/}

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Personalised care in an overwhelmed system
            </Typography>
            <Typography color="gray" className="lg:pr-20">
              Today, clinicians find themselves spending vast time on routine tasks like contacting new referrals for triage information, waitlist management and history taking, diverting them from high value patient care. <p></p>

              Outside the clinic, patients feel isolated, and disconnected from their clinical team. They enter the system 'unseen'.

            </Typography>

            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
              The Result?
            </Typography>

            <Typography color="gray" className="lg:pr-20">
              A healthcare environment strained by inefficiencies, where manual efforts to bridge the gaps are the norm, and both patients and clinicians spend their time navigating complexity and challenge.
            </Typography>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
