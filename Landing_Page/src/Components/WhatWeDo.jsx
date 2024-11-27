import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export default function WhatWeDo() {
    return (
        <Card className="w-full flex-col md:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full md:w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="md:h-full h-[30vh] w-full object-cover"
                />
            </CardHeader>
            <CardBody className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <div className="bg-blue-300 h-2 w-[10%] rounded-full" />
                    <p className="md:text-5xl text-4xl font-semibold">What We Do</p>
                </div>
                <Typography color="gray" className="mb-8 font-normal">
                    At Eagle County Bank, we redefine banking by offering personalized financial solutions tailored to meet your unique needs.
                    From seamless online banking and secure credit services to expert investment advice and home mortgages,
                    we empower individuals and businesses to thrive. Our mission is to build lasting relationships with our clients,
                    providing the tools and support they need to achieve their financial goals, all while ensuring security, trust, and convenience.
                </Typography>
            </CardBody>
        </Card>
    );
}
