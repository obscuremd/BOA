import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { motion } from "motion/react"

export default function ServiceCard({ icon, text, body }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Card className="mt-6 w-96">
                <CardBody>
                    <div className="flex items-center gap-5">
                        {icon}
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {text}
                        </Typography>
                    </div>
                    <Typography>
                        {body}
                    </Typography>
                </CardBody>
            </Card>
        </motion.div>
    );
}