import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const About = () => {
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div>
    <ScrollContainer>
  <ScrollPage>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <span style={{ fontSize: "30px" }}>Hello and welcome to Laying The Wood. Please scroll through my introduction and get to know me and my goals. Seriously, I mean literally scroll.</span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={ZoomInScrollOut}>
        <span style={{ fontSize: "40px" }}>My name is James Wood, I am a father of three. I am transitioning to software engineering and persuing my passions.</span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={FadeUp}>
        <span style={{ fontSize: "40px" }}>You came here to get a peak into one of my strongest passions. Sports!  </span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={ZoomInScrollOut}>
        <span style={{ fontSize: "40px" }}>Here you'll find my fantasy sports rankings. I am going to be updating this site with articles and more in the coming weeks.</span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span style={{ fontSize: "40px" }}>The End</span>
        <br/>
        <span style={{ fontSize: "30px" }}>
          Thank you for taking a scroll with me down this path and good luck in all your leagues!
        </span>
      </Animator>
    </ScrollPage>
  </ScrollContainer>
    </div>
  )
};

export default About;