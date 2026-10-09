import { Geist } from "next/font/google";

const geist = Geist();

const LandingPage = () => {
  return <div className={geist.className}>Hello, CU-NEX!</div>;
};

export default LandingPage;
