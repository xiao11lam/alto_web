import React from "react";
import {
    Button, Card, CardBody, CardHeader,
    Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";





interface CategoriesCardPropsType {
    img: string;
    category: string;
    description: string
}
interface FeatureCardProps {
    icon: string;
    title: string;
    children: React.ReactNode;
}
function FeatureCard({ icon, title, children }: FeatureCardProps) {
    return (
        <Card color="transparent" shadow={false}>
            <CardBody className="grid justify-center text-center">
                <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
                    {icon}
                </div>
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 !font-semibold"
                >
                    {title}
                </Typography>
                <Typography
                    className="px-8 font-normal text-gray-700"
                >
                    {children}
                </Typography>
            </CardBody>
        </Card>
    );
}


const features = [
    {
        icon: "assesmentMedication",
        title: "Automate referrals Patient",
        // description:
        //     "For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one",
    },
    {
        icon: "assesmentMedication",
        title: "Assessment Medication",
        // description:
        //     "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others.",
    },
    {
        // icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
        icon: "assesmentMedication",
        title: "Adherence Voice AI calls",
        // description:
            // "We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love.",
    },
    {
        // icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
        icon: "assesmentMedication",
        title: "Reduce inbox notifications",
        // description:
        // "We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love.",
    },
    {
        // icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
        icon: "assesmentMedication",
        title: "Automated check-ins",
        // description:
        // "We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love.",
    },
    {
        // icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
        icon: "assesmentMedication",
        title: "Triage & escalation",
        // description:
        // "We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love.",
    }
    // ,
    // {
    //     icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Payments functionality",
    //     description:
    //         "Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
    // },
    // {
    //     icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Improved platform",
    //     description:
    //         "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
    // },
    // {
    //     icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Prebuilt components",
    //     description:
    //         "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    // },
    // {
    //     icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Prebuilt components",
    //     description:
    //         "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    // },
    // {
    //     icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Prebuilt components",
    //     description:
    //         "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    // },
    // {
    //     icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Prebuilt components",
    //     description:
    //         "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    // }
    // ,
    // {
    //     icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Prebuilt components",
    //     description:
    //         "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    // }
    // {
    //     icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    //     title: "Prebuilt components",
    //     description:
    //         "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    // }
];
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import {
    BoltIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    EyeIcon,
    FaceSmileIcon,
    HeartIcon,
    LinkIcon
} from "@heroicons/react/24/solid";
function CategoriesCard({ img, category, description }: CategoriesCardPropsType) {
    return (
        <Card
            shadow={false}
            className="relative grid h-[25rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center"
        >
            <CardHeader
                // floated={false}
                // shadow={false}
                // color="transparent"
                color="blue"

                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                // style={{ backgroundImage: `url(${img})` }}
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                    variant="h4"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                >
                    {category}
                </Typography>
            </CardBody>

            <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                    variant="h6"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                >
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
}

const categories = [
    {
        img: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        category: "Increase Access",
        description: "Alto makes it easier for patients to refer and seek support even out of hours."
    },
    {
        img: "https://images.unsplash.com/photo-1542845476-351174c0a0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        category: "Save time by leaving Alto to collect vital information",
        description: "Alto gathers all the information you need demographics, history at the point of referral"

    },
    {
        img: "https://images.unsplash.com/photo-1554116154-e733de92fe4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        category: "Essential information in your hands before assessment",
        description: "Save time by leaving Alto to collect vital information Alto gathers all the information you need demographics, historyat the point of referral."

    },
    {
        img: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        category: "Provide guidance, leverage patient reports",
        description: "Alto delivers automated, accessible, and always-on support to your patients. Letting you stay close to them, even when they’re at home, without extra work added to your plate."

    },
    {
        img: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        category: "Prioritise patients at risk",
        description: "Alto sign post those at risk to more appropriate services, and automatic tagging allows you to prioritize assessments for those who may be at risk"


    },

    {
        img: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        category: "Improve outcomes",
        description: "Patient engagement is associated with adherence and outcome improvements"

    },
];
export function CodePresentation() {

  return (
    <ThemeProvider>
      {/*<div className="h-full w-screen place-items-center bg-white px-8 py-8">*/}
      {/*  <div className="container mx-auto grid items-center relative lg:grid-cols-2">*/}
      {/*    <div className="text-center lg:text-left">*/}
      {/*      <Typography*/}
      {/*        color="blue"*/}
      {/*        className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5"*/}
      {/*      >*/}
      {/*          Solution*/}
      {/*      </Typography>*/}

      {/*      <Typography*/}
      {/*        variant="h2"*/}
      {/*        color="blue-gray"*/}
      {/*        className="mb-8 leading-tight"*/}
      {/*      >*/}
      {/*          We connect patients and clinicians for smarter care*/}

      {/*      </Typography>*/}
      {/*      <Typography color="blue-gray" className="lg:pr-20">*/}
      {/*          Alto’s platform offers patients easy access and guidance, and clinicians evidence-based assessment, connection and data driven decisions. Increasing adherence, reducing manual tasks and enabling you to focus on the most important patient care.*/}
      {/*      </Typography>*/}


      {/*      /!*<a href="https://www.creative-tim.com/learning-lab/astro/overview/astro-launch-ui">*!/*/}
      {/*      /!*  <Button color="dark" variant="text" size="sm" className="flex items-center mx-auto md:mr-auto lg:ml-0 gap-2 mt-4">*!/*/}
      {/*      /!*    Documentation <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />*!/*/}
      {/*      /!*  </Button>*!/*/}
      {/*      /!*</a>*!/*/}
      {/*    </div>*/}
      {/*      <img src="landing1-connect-patients.svg" alt="iphone" className="max-w-2xl rounded-3xl hidden md:flex mx-auto" />*/}
      {/*  </div>*/}
      {/*</div>*/}
        <header className="container mx-auto rounded-2xl overflow-hidden ">
            <div className="relative h-full flex align-center flex-col justify-center text-center bg-cover py-24" style={{backgroundImage: `url('landing1-connect-patients.svg')`}}>
                <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
                <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 !leading-tight lg:text-7xl z-20 "

                >
                    Solution

                </Typography>
                <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10"
                >
                    We connect patients and clinicians for smarter care
                    {/*Alto’s platform offers patients easy access and guidance, and clinicians evidence-based assessment, connection and data driven decisions. Increasing adherence, reducing manual tasks and enabling you to focus on the most important patient care.*/}


                </Typography>
                {/*<div className="w-auto mx-auto">*/}
                {/*    <div className="flex items-center">*/}
                {/*        <Button size="lg" color="white" className="w-full px-4 z-10">*/}
                {/*            Show new arrivals*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </header>

        {/*<section className="py-8 px-8 lg:py-16">*/}
        {/*    <div className="container mx-auto">*/}
        {/*        /!*<div className="mb-24 w-1/2">*!/*/}
        {/*        /!*    <Typography variant="h2" color="blue-gray" className="mb-4">*!/*/}
        {/*        /!*        Shop by category*!/*/}
        {/*        /!*    </Typography>*!/*/}
        {/*        /!*    <Typography*!/*/}
        {/*        /!*        variant="lead"*!/*/}
        {/*        /!*        className="l:px-20 text-blue-gray-800"*!/*/}
        {/*        /!*    >*!/*/}
        {/*        /!*        This is the paragraph where you can write more details about your*!/*/}
        {/*        /!*        categories. Keep you user engaged by providing meaningful information.*!/*/}
        {/*        /!*    </Typography>*!/*/}
        {/*        /!*</div>*!/*/}
        {/*        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">*/}
        {/*            {categories.map((props, key) => (*/}
        {/*                <CategoriesCard key={key} {...props} />*/}
        {/*            ))}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}

        {/*<section className="py-28 px-4">*/}
        {/*    <div className="container mx-auto mb-20 text-center">*/}
        {/*        <Typography color="dark" className="mb-2 font-bold text-lg">*/}
        {/*            Features*/}
        {/*        </Typography>*/}
        {/*        <Typography variant="h2" color="blue-gray" className="mb-4">*/}
        {/*            Alto offers a wide range of features for you*/}
        {/*        </Typography>*/}
        {/*        /!*<Typography*!/*/}
        {/*        /!*    variant="lead"*!/*/}
        {/*        /!*    className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"*!/*/}
        {/*        /!*>*!/*/}
        {/*        /!*    We&apos;re constantly trying to express ourselves and actualize our*!/*/}
        {/*        /!*    dreams. If you have the opportunity to play*!/*/}
        {/*        /!*</Typography>*!/*/}
        {/*    </div>*/}
        {/*    /!*<div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">*!/*/}
        {/*        <div className="container  grid grid-cols-2 gap-y-20 md:grid-cols-10 lg:grid-cols-3 ">*/}

        {/*        /!*{features.map(({ icon, title, description }) => (*!/*/}
        {/*        /!*    <FeatureCard key={title} icon={`./iconsAlto/${icon}.svg`} title={title}>*!/*/}
        {/*        /!*        {description}*!/*/}

        {/*        /!*    </FeatureCard>*!/*/}

        {/*        /!*))}*!/*/}

        {/*        {features.map(({ icon, title, description }) => (*/}
        {/*            <img key={title} src={`./iconsAlto/${icon}.svg`} title={title} className="h-20 w-20 ">*/}

        {/*            </img>*/}

        {/*            // <Typography className="flex items-center">*/}
        {/*            //     <img*/}
        {/*            //         src={`iconsAlto/${icon}.svg`}*/}
        {/*            //         alt="logo"*/}
        {/*            //         className="h-20 w-10"*/}
        {/*            //     />*/}
        {/*            // </Typography>*/}

        {/*        ))}*/}


        {/*    </div>*/}
        {/*</section>*/}
    </ThemeProvider>


  );
}

export default CodePresentation;
