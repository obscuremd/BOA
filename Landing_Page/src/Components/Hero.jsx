import { Button } from "@material-tailwind/react";

export default function Hero() {
  return (
    <div className="p-2 md:p-5">
      <div className="relative grid h-[80vh] md:h-[35rem] w-full flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative w-full text-center justify-center p-6 px-6 py-14 md:px-12 flex flex-col gap-2">
          <h2 className=" text-lg text-white"> Welcome to Eagle Count Bank </h2>
          <h2 className=" text-3xl font-medium text-white"> Your Bank Your Way </h2>
          <h2 className=" text-lg text-white">Eagle County Bank: Fast, easy banking—manage accounts, transfer funds, and get support hassle-free!</h2>
          {/* <div className="flex justify-center gap-5 w-full">
            <Button variant="gradient" color="blue" className="flex items-center gap-3 md:text-xl">
              Login
            </Button>
            <Button variant="gradient" className="flex items-center gap-3 md:text-xl">
              Sign Up
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}