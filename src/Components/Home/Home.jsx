import React, { lazy, Suspense } from "react";
import Wrapper from "../../non-optimized-components/Wrapper/Wrapper";
import Hero from "./Hero-Section/Hero";
const SimpleCard = lazy(() => import("./Simple-Cards/SimpleCard"));
const RecentlyLaunched = lazy(() =>
  import("./RecentlyLaunched/RecentlyLaunched")
);
const Model = lazy(() => import("../UI/Category-main/Model"));

const Home = () => {
  return (
    <>
      <Wrapper margin="70px 30px 20px 30px">
        <Hero />
      </Wrapper>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <SimpleCard />
        <RecentlyLaunched />
        <Model />
      </Suspense>
    </>
  );
};

export default Home;
