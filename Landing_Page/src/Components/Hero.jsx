import { Carousel, Typography, Button } from "@material-tailwind/react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <Carousel className="rounded-xl">
      {/* Slide 1 */}
      <div className="relative h-[80vh] md:h-full w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1661371394983-42485fed3a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNoYWtlfGVufDB8fDB8fHww"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-3/4 text-center md:w-2/4"
          >
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Eagle County Bank
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Fast, easy banking—manage accounts, transfer funds, and get support hassle-free!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex justify-center gap-2"
            >
              <a
                href="https://eaglecountybank.vercel.app/"
                className="flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" color="white">
                  Login
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-[80vh] md:h-full w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1683121132274-953b07f17ec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32"
          >
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Your Bank Your Way
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                A bank that rewards you—experience flexibility and convenience with Eagle County.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="flex gap-2"
            >
              <a
                href="https://boa-main.vercel.app/"
                className="flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" color="white">
                  Login
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative h-[80vh] md:h-full w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aXNuZXNzfGVufDB8fDB8fHww"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32"
          >
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Grow With Us
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Empowering your financial journey with the tools and services to help you thrive.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="flex gap-2"
            >
              <a
                href="https://boa-main.vercel.app/"
                className="flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" color="white">
                  Login
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Carousel>
  );
}
