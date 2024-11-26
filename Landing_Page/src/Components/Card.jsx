import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardWithLink({ icon, Text1, paragraph }) {
  return (
    <Card className="mt-6 w-96 flex items-center">
      <CardBody className="flex flex-col items-center">
        <div className="w-32 h-32">
          {icon}
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {Text1}
        </Typography>
        <Typography className="text-center w-[15em]">
          {paragraph}
        </Typography>
      </CardBody>

    </Card>
  );
}