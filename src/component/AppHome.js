import React, { useContext } from 'react'
import TextOverImage from './HomeComponents/TextOverImage'
import GrowMoreWith from './HomeComponents/GrowMoreWith'
import OurCourses from './HomeComponents/OurCourses'
import WhatMoreDoWeOffer from './Misc/WhatMoreDoWeOffer'
import GetDemo from './Misc/GetDemo'
import StudentsFeedback from './HomeComponents/StudentsFeedback'
import DataImageButton from './Misc/DataImageButton'
import MeetingImage from './Images/DSC2304.JPG'

import LeftImageData from './Misc/LeftImageData'
import ImageLeft from './Images/DSC2208.JPG'
import RightImageData from './Misc/RightImageData'
import ImageRight from './Images/DSC2304.JPG'
import OurCoursesLeftImage from './Images/DSC2203.JPG'
import OurCoursesRightImage from './Images/DSC2146.JPG'
import { useNavigate } from 'react-router-dom'
import UserContext from './UserComponent/UserContext'
import A from './Images/DSC2231A.JPG'
import B from './Images/DSC2208B.JPG'
import C from './Images/DSC2369C.JPG'
import D from './Images/DSC2408D.JPG'
import ImageLeftNormal from './Images/Team/MallikaPandey.jpeg'
import LeftImageNormal from './Misc/LeftImageNormal'

export default function AppHome() {
  const { user } = useContext(UserContext);
  const navigate=useNavigate();
  const bannerAction=()=>{
    navigate('/courses');
  }
  const actionA = ()=>{
    if(user){
      alert("Plan A")
    } else {
      navigate('/users/login');
    }
  }
  const actionB = ()=>{
    if(user){
      alert("Plan B")
    } else {
      navigate('/users/login');
    }
  }
  const BookMeeting=()=>{
    if(user){
      navigate(`/users`);
    } else {
      navigate('/users/login');
    }
    
  }
  return (
    <div >
      <TextOverImage banner={{bannerAction}} />
      <GrowMoreWith images={{A,B,C,D}}/>
      <OurCourses action={{actionA,actionB}} images={{OurCoursesLeftImage,OurCoursesRightImage}}/>
      <br/>
      <DataImageButton data={{ 
          title: '1 : 1 Personalized Meetings', 
          details: [`Reserve Your Exclusive Video Call with Our Top Mentors to Address All Your Questions and Doubts.`], 
          buttonName: 'Book 1:1 VIdeo Call', 
          imgSrc: MeetingImage 
        }} 
        action={{BookMeeting}}/>
      <LeftImageData data={{
        title: `We're operating at nearly double capacity to help you secure your job.`,
        details: [`We're pulling out all the stops to make your job aspirations a reality. At our peak performance, we're operating at nearly double our regular capacity. Why?`,
          `Because
          we understand the importance of your dream job, and we're committed to doing
          everything it takes to get you there. Our team is working tirelessly to create
          opportunities, offer guidance, and provide the support you need to succeed. Your job
          journey is our top priority, and we're here to make it happen, no matter what it takes.
          So, rest assured, with us, you're in capable hands, and your dream job is well within
          reach.`],
        imgSrc: ImageLeft
      }} />
      <WhatMoreDoWeOffer />
      <RightImageData data={{
        title: 'Meet The Mentor',
        details: [`Hello My Name Is Vaibhav Mehta . I'm an experienced educational content creator and
        career coach with more than 5 years of know-how in this field. I specialize in crafting
        engaging educational materials and helping people navigate their career paths.
        Unlocking doors to success, my job-getting wizardry has paved the way for over
        2500+ individuals to secure coveted positions in the industry's elite. With my unique
        and effective job-seeking strategies, I've turned dreams into reality, transforming
        careers and making the impossible possible. Join the ranks of those who've
        triumphed and let's script your success story together!"Explore our YouTube channel for
        valuable insights and join our Newly launched transformative training programs: the '15-Day
        Fast-Track to Your Dream Job Course' for rapid career advancement and 'Master English
        Speaking in Just 30 Days' for fluent and confident communication. Let Mehta Voice be your
        guide to a brighter future, where success knows no bounds.`],
        imgSrc: ImageRight
      }} />
      <LeftImageNormal data={{
        title: `Meet Couch, Guide And Mentor`,
        details: [`I am Mallika Pandey , a Biotechnology Engineer , MBA in HR and Finance and ex-banker. I qualified many government exams like IBPS-PO, RBI, NABARD. I served in bank for last 5.5 years but somewhere I always wanted to be into this profession by the inculcation of my skills to hit interview to help our youth. So I am here to help you out with a steady source of motivation and self driven attitude.`],
        imgSrc: ImageLeftNormal
      }} />
      <GetDemo />
      <StudentsFeedback />
    </div>
  )
}
