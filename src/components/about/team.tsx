import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
}

function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 h-64">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <Typography variant="h4" color="blue-gray" className="mb-1">
        {name}
      </Typography>
      <Typography color="gray" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        {desc}
      </Typography>
      {/*<div className="flex items-center">*/}
      {/*  <IconButton variant="text" color="light-blue">*/}
      {/*    <i className="fa-brands fa-twitter text-lg not-italic" />*/}
      {/*  </IconButton>*/}
      {/*  <IconButton variant="text" color="blue">*/}
      {/*    <i className="fa-brands fa-linkedin text-lg not-italic" />*/}
      {/*  </IconButton>*/}
      {/*  <IconButton variant="text" color="pink">*/}
      {/*    <i className="fa-brands fa-dribbble text-lg not-italic" />*/}
      {/*  </IconButton>*/}
      {/*</div>*/}
    </Card>
  );
}

const members = [
  // {
  //   img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  //   name: "Tina Andrew",
  //   title: "Founder & CEO",
  //   desc: "Today you are you! That is truer than true! There is no one alive!",
  // },
  {
    img: "marita.png",
    name: "Marita Kenrick",
    title: "Co-founder and CEO",
    desc: "Marita, her cancer prevention and diagnosis work, has been internationally adopted and awarded is backed by: \n" +
        "\n" +
        "senior roles with Public Health England managing NHS campaigns and digital products; and\n" +
        "qualifications (MPublicHealth, BPsych (H1) & BA Marketing) in Marketing, Psychology and Public Health.\n",
  },
  {
    img: "xiao.png",
    name: "Xiao Zhang",
    title: "Co-founder and CTO",
    desc: "Xiao is an natural language processing expert, especially speech processing. \n" +
        "\n" +
        "His qualifications (Mphil Speech and Language Processing, BA Computational Linguistics), software development skills and experience at Oculus and Longcheer, uniquely qualifies him to power our NLP and voice AI technologies.\n",
  },
  {
    img: "alice.png",
    name: "Alicia Smirnova",
    title: "UX Research & Design Lead",
    desc: "Alicia is a dedicated UX/UI designer specializing in conversational AI products, driven by a passion for data-driven development and the creation of impactful applications. Currently, she is focused on optimizing the user experience for Alto's conversations, with a goal to craft inclusive, user-friendly, and efficient interactions."
  },
  // {
  //   img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //   name: "Demi Wilkinson",
  //   title: "Fronted Developer",
  //   desc: "Success is not final, failure is not fatal: it is the courage to continue",
  // },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
            Here is Alto Health
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Our team has deep expertise in health, communications, and AI
          </Typography>
          <Typography
              variant="lead"
              className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800"
          >
            Contact Us: <a href="mailto:marita@altohealth.io" className="text-blue" style={{textDecoration: 'underline'}}>marita@altohealth.io</a>
          </Typography>


        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
