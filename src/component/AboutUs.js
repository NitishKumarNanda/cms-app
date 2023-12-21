import React from 'react'
import DataImageButton from './Misc/DataImageButton'
import LeftImageData from './Misc/LeftImageData'
import AboutUsComponent from './AboutUsComponent/AboutUsComponent'
import MeetingImage from './Images/DSC2304.JPG'
import ImageLeft from './Images/DSC2208.JPG'
import MallikaPanday from './Images/Team/MallikaPandey.jpeg'
import Ekta from './Images/Team/Ekta.jpeg'
import Vidhi from './Images/Team/Vidhi.jpeg'
import PrabhjotRoy from './Images/Team/PrabhjotRoy.jpeg'

export default function AboutUs() {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    const BookMeeting = () => {
        scrollToElement('scroll-to-element');
    };

    return (
        <div style={{ overflowY: 'auto', height: 'calc(100vh - 135px)' }}>
            <DataImageButton data={{
                title: 'A Small team with grand ambition',
                details: [`At Mehta Placements we are a dedicated and passionate team with a grand ambition – to empower individuals on their journey to success. We understand that finding the right job and launching a fulfilling career can be a daunting task. That's why we're here to guide you every step of the way.`,
                        `Our mission is simple yet powerful: We provide comprehensive job training programs designed to equip you with the skills and knowledge you need to excel in your chosen field. But we don't stop there. What sets us apart is our unwavering commitment to ensuring your success. We offer guaranteed placements, bridging the gap between education and real-world employment.`
                        ],
                buttonName: 'Meet the Crew',
                imgSrc: MeetingImage
                }}
                dataOther={{
                    details:[
                        `Our small, closely-knit team is united by the belief that everyone deserves the opportunity to achieve their career goals. We provide hands-on training, mentorship, and support to help you reach your full potential. With 'Empowering Careers,' you're not just another student – you're a valued member of our community.`,
                        `We understand that each individual's journey is unique, and we tailor our programs to meet your specific needs. Whether you're seeking a new career, looking to upskill, or transitioning into a different industry, we have the tools and expertise to make it happen.`,
                        `At Mehta Placements we see your potential and are committed to unlock it. Join us on this exciting journey towards a brighter, more fulfilling future. Your success is our success, and together, we can achieve greatness."`
                    ]
                }}
                action={{ BookMeeting }} />
            <LeftImageData data={{
                title: `We're operating at nearly double capacity to help you secure your job.`,
                details: [`We're pulling out all the stops to make your job aspirations a reality. At our peak performance, we're operating at nearly double our regular capacity. Why?`,
                    `Because we understand the importance of your dream job, and we're committed to do
                    everything it takes to get you there. Our team is working tirelessly to create
                    opportunities, offer guidance, and provide the support you need to succeed. Your job
                    journey is our top priority, and we're here to make it happen, no matter what it takes.
                    So, rest assured, with us, you're in capable hands, and your dream job is well within
                    reach.`],
                imgSrc: ImageLeft
            }} />
            <div id="scroll-to-element">
            </div>
            <AboutUsComponent data={{
                title: 'Our Team',
                subTitle:'Our Team: Shaping Your Success Story',
                details: [
                    `At 'Mehta Placements,' our team is the backbone of our commitment to your success. We understand that embarking on a career journey can be a complex and uncertain endeavor, and that's where we come in.`,
                    `Our team of dedicated professionals is more than just a group of individuals – we are your partners in shaping your success story. Our primary mission is to offer top-tier job training and fulfill our pledge of guaranteed placements.`,
                    `We take immense pride in our team, which is comprised of experienced trainers, industry experts, and supportive mentors. Each member brings a wealth of real-world knowledge and expertise, ensuring that your training is not just theoretical but deeply practical and tailored to industry needs.`,
                    `But we don't stop at training – our placement team is equally dedicated to securing opportunities that match your skills and career aspirations. We are your advocates, working relentlessly to connect you with the right employers.`,
                    `Our administrative staff ensures that your entire experience with 'Mehta Placements' is seamless and hassle-free. From initial enrollment to graduation, they are here to assist you, answer your questions, and provide support every step of the way.`,
                    `At 'Mehta Placements,' we don't just see you as students; we see you as future success stories. Our team is committed to provide you with the tools, resources, and guidance necessary to achieve your career goals.`,
                    `We are excited to be part of your journey and eager to play our role in helping you reach your full potential. With 'Mehta Placements,' you're not just another face in the crowd – you're a valued member of our community, and your success is our ultimate goal.`
                ],
                members: [{
                    name: 'Mallika Pandey', designation: 'Couch, Guide And Mentor', imgSrc: MallikaPanday,
                    socialMedia: [{ icon: 'bi bi-facebook', link: 'Facebook.com' },
                    { icon: 'bi bi-whatsapp', link: 'web.Whatsapp.com' },
                    { icon: 'bi bi-instagram', link: 'instagram.com' },
                    { icon: 'bi bi-twitter', link: 'twitter.com' }]
                }, {
                    name: 'Prabhjot Roy', designation: 'Backend Executive, Mentor, Guide And Counselling Coach', imgSrc: PrabhjotRoy,
                    socialMedia: [{ icon: 'bi bi-facebook', link: 'Facebook.com' },
                    { icon: 'bi bi-whatsapp', link: 'web.Whatsapp.com' },
                    { icon: 'bi bi-instagram', link: 'instagram.com' },
                    { icon: 'bi bi-twitter', link: 'twitter.com' }]
                }, {
                    name: `Vidhi Ma'am`, designation: 'Youtube Content Coach And Trainer', imgSrc: Vidhi,
                    socialMedia: [{ icon: 'bi bi-facebook', link: 'Facebook.com' },
                    { icon: 'bi bi-whatsapp', link: 'web.Whatsapp.com' },
                    { icon: 'bi bi-instagram', link: 'instagram.com' },
                    { icon: 'bi bi-twitter', link: 'twitter.com' }]
                }, {
                    name: 'Ekta', designation: 'Backend Executive And Councelling Coach', imgSrc: Ekta,
                    socialMedia: [{ icon: 'bi bi-facebook', link: 'Facebook.com' },
                    { icon: 'bi bi-whatsapp', link: 'web.Whatsapp.com' },
                    { icon: 'bi bi-instagram', link: 'instagram.com' },
                    { icon: 'bi bi-twitter', link: 'twitter.com' }]
                }
                ]
            }} />
        </div>
    )
}
