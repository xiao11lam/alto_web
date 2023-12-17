import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="blue"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
              Welcome to Alto
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
              What Alto do?
            </Typography>
            <Typography variant="lead" color="white">
              Reducing manual administration, maximising clinical impact, and making patients happier and healthier.
            </Typography>
            <a href="/about">
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-12">
                Request A Demo
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <svg viewBox="0 0 83 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.788 26H0.576L9.9 0.799998H13.932L23.256 26H19.044L17.532 21.86H6.3L4.788 26ZM11.916 6.2L7.632 18.044H16.2L11.916 6.2ZM29.9559 26H25.9959V0.799998L29.9559 0.368V26ZM40.7368 26H36.7768V11.744H33.1408V8H36.7768V0.799998L40.7368 0.368V8H46.1368V11.744H40.7368V26ZM56.2185 26.216C50.8905 26.216 47.0025 22.256 47.0025 17C47.0025 11.744 50.8905 7.784 56.2185 7.784C61.5465 7.784 65.4345 11.744 65.4345 17C65.4345 22.256 61.5465 26.216 56.2185 26.216ZM56.2185 22.4C59.3145 22.4 61.4025 20.132 61.4025 17C61.4025 13.868 59.3145 11.6 56.2185 11.6C53.1225 11.6 51.0345 13.868 51.0345 17C51.0345 20.132 53.1225 22.4 56.2185 22.4Z" fill="#FFFFFF"/>
              <path d="M80.1934 22.7073H78.0645V23.2889H80.1934V24.4998L82.9995 22.9966L80.1934 21.4963V22.7073Z" fill="#FFFFFF"/>
              <path d="M73.3751 20.0498C71.9818 20.0498 70.8477 21.2667 70.8477 22.761C70.8477 24.2761 71.9818 25.5109 73.3751 25.5109C74.7489 25.5109 75.8663 24.2791 75.8663 22.761C75.8691 21.2667 74.7489 20.0498 73.3751 20.0498Z" fill="#FFFFFF"/>
            </svg>
            {/*<img*/}
            {/*  src="astro.png"*/}
            {/*  alt="astro"*/}
            {/*  className="h-full w-full object-cover md:absolute"*/}
            {/*/>*/}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
