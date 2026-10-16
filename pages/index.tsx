import { Geist } from "next/font/google";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="m-2 md:m-4">
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-surface rounded-xl">
        <Image
          src={"/brand/nexky/nexky-happy.svg"}
          width={96}
          height={96}
          alt="CU-NEX Logo"
          className="w-32 h-32 shrink-0"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Hello, CU-NEX!</h1>
          <p>
            This is the boilerplate for `CU-NEX Scheduled` app. This project
            uses Next.js Pages Router system, to get started, fonts and themes
            are declared at `styles/global.css`, edit this page at
            `pages/index.tsx`.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod est
            sapiente minus laudantium. Quisquam eius quidem, sapiente dolorem
            non ea quis aut perferendis cumque doloremque earum voluptas quod ex
            esse?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
