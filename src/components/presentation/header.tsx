import React from "react";
import {
  Button, Card, CardBody,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <div className="mb-8 inline-flex items-center">
              <Typography
                color="dark"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                AI tools for the cancer care pathway
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              Simplifying patient <span className="text-blue">engagement and assessment</span>
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
              Alto is the easy-to-use platform that streamlines patient engagement and assessment <span className="text-blue">through voice interaction</span>.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="/about">
                <Button color="dark" className="flex items-center">
                  Request A Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="sentiment_1.png" alt="components" className="absolute -top-0 right-20 w-1/2 " />
        </div>
      </header>


    </ThemeProvider>
  );
}

export default HeroPresentation;



