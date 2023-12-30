import React from "react";
import {
  Button,
  Card, CardBody,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

// const logos = [
//   "timeIcon",
//   "satisfactionIcon",
//   "moneyIcon",
//   "timeIcon"
// ];

function StatsCard({ count, title, desc, icon }) {
  return (

    // <Card color="transparent" shadow={false}>
    //   {/*<Typography className="flex flex-wrap items-center justify-center gap-8">*/}
    //   {/*    <img*/}
    //   {/*        src={`iconsAlto/${icon}.svg`}*/}
    //   {/*        alt="logo"*/}
    //   {/*        className="w-40 mr-50"*/}
    //   {/*    />*/}
    //   {/*</Typography>*/}
    //   <Typography variant="h1" className="mb-4 text-5xl text-dark">
    //     {count}
    //     <img
    //         src={`iconsAlto/${icon}.svg`}
    //         alt="logo"
    //         className="w-40 mr-50"
    //     />
    //   </Typography>
    //   <Typography variant="h5" color="blue-gray">
    //     {title}
    //   </Typography>
    //   <Typography color="gray">
    //     {desc}
    //   </Typography>
    // </Card>

      <Card color="transparent" shadow={false}>
        <Typography className="flex items-center gap-4">

          <Typography variant="h1" className="text-5xl text-dark">
            {count}
          </Typography>
          <img
              src={`iconsAlto/${icon}.svg`}
              alt="logo"
              className="w-10"
          />
        </Typography>
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography color="gray">
          {desc}
        </Typography>
      </Card>



  );
}

const stats = [
  {
    count: "2.5 staff",
    title: "Free up the time of 2.5 full time staff",
    icon: "timeIcon"
    // desc: "From buttons, to inputs, navbars, alerts, tabels, cards or charts."
  },
  {
    count: "50%",
    title: "Increase patient satisfaction by 50%\n",
    icon: "satisfactionIcon"
    // desc: "Save months of work when you use our pre-made pages."
  },
  {
    count: "150k",
    title: "Save 150k pa from missed appointments",
    icon: "moneyIcon"
    // desc: "Mix the already made sections and unleash your creativity."
  },
  {
    count: "73.5%",
    title: "Reducing the hours spent on the patient journey by 73.5%",
    icon: "staffIcon"
    // desc: "Colors, typography system, shadows, and blur effects are ready to be used."
  },
];

export function FigmaPresentation() {

  return (
    <ThemeProvider>
      <section className="py-8 px-8 lg:py-20">
        <div className="container mx-auto">
          <Card
              shadow={false}
              className="overflow-hidden rounded-3xl !bg-blue-gray-900"
          >
            <CardBody className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row">
              <div>
                {/*<img*/}
                {/*    src="logos/logo-spotify.svg"*/}
                {/*    alt="spotify"*/}
                {/*    className="mb-8 w-36"*/}
                {/*/>*/}
                <Typography
                    variant="h3"
                    color="white"
                    className="mb-10 font-medium leading-normal"
                >
                  &quot;Inefficiency in patient communication and prioritisation, costs cancer clinics more than 6,428 staff hours annually
                  &quot;
                </Typography>
                <Typography
                    variant="lead"
                    color="white"
                    className="font-medium"
                >
                  Innovation for sustainable cancer
                </Typography>
                <Typography
                    color="white"
                    className="font-normal opacity-70"
                >
                  Vintura
                </Typography>
              </div>
              <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
                {/*<img*/}
                {/*    // src="avatars/avatar6.jpg"*/}
                {/*    alt="testimonial image"*/}
                {/*    className="h-80 w-80 rounded-full object-cover"*/}
                {/*/>*/}
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
                With Alto, cancer clinics can free up time, save money and increase patient satisfaction

            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
                Impact
            </Typography>
            {/*<Typography color="blue-gray" className="mb-5 lg:w-[30rem]">*/}
            {/*  All the sections and pages made with these elements will be fully responsive and will look beautiful on all types of screens, including phones, tables, or desktops.*/}
            {/*</Typography>*/}
          </div>



          <div className="lg:flex relative ">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8 ">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                {/*<a href="https://www.creative-tim.com/product/astro-launch-ui-pro" target="_blank">*/}
                {/*  <Button color="dark" className="flex items-center">*/}
                {/*     Astro Pro*/}
                {/*  </Button>*/}
                {/*</a>*/}
              </div>
            </div>
            {/*<img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />*/}
          </div>
        </div>
      </div>


    </ThemeProvider>



  );
}

export default FigmaPresentation;
