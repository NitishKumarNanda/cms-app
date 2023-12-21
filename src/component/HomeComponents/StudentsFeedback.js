import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import imgSrc from '../Images/pic1.jpg'
import Kulesh from '../Images/KuleshMittal.jpeg'
import Anukriti from '../Images/AnukritiArya.jpeg'
import Divya from '../Images/DivyaBansal.jpeg'
import Shalu from '../Images/Shalu.jpeg'
import Inderjeet from '../Images/InderjeetDeep.jpeg'
import Nazish from '../Images/Nazish.jpeg'
import Shrinjoy from '../Images/ShrinjoyRoy.jpeg'


export default function StudentsFeedback() {
  const [data] = useState([
    {
      id: 1,
      name: 'Kulesh Mittal',
      image:`${Kulesh}`,
      message: `Mehta Placements training program was a game-changer for me! Thanks to their expert guidance and support, I landed a fantastic job with an annual package of approximately 6 lakhs. Their approachable and effective training methods made all the difference. I couldn't be happier with the results!`
    },
    {
      id: 2,
      name: 'Anukriti Arya',
      image:`${Anukriti}`,
      message: `Mehta Placements' training program is nothing short of extraordinary! Thanks to
      their exceptional guidance and unwavering support, I secured a remarkable job with
      an annual package of approximately 6.5 lakhs. Their approachable and effective
      training methods made all the difference in my job search journey. I am truly grateful
      for the incredible opportunity they provided.`
    },
    {
      id: 3,
      name: 'Divya Bansal',
      image:`${Divya}`,
      message: `I am deeply indebted to Mehta Placements And Vaibhav Meha Sir for their
      incredible training program, which not only honed my skills but also opened the door
      to a fantastic job opportunity. Thanks to their guidance, I now enjoy a fulfilling career
      with an annual salary of nearly 7.5 lakhs. Mehta Placements' dedication to
      personalized mentorship and continuous support truly sets them apart.`
    },
    {
      id: 4,
      name: 'Shalu',
      image:`${Shalu}`,
      message: `Mehta Placements has been a game-changer in my career journey. Their training
      program was a revelation, catapulting me into a job that offers an annual
      remuneration of approximately 7 lakhs. The innovative teaching methods and
      nurturing environment provided by Mehta Placements make them a standout
      choice.`
    },
    {
      id: 5,
      name: 'Inderjeet',
      image:`${Inderjeet}`,
      message: `Enrolling with Mehta Placements was the turning point in my professional
      life. Their comprehensive training program unlocked a world of opportunities,
      leading me to a fulfilling career with an annual package of nearly 6.5 lakhs.
      The dedication and expertise of Mehta Placements' instructors are
      unmatched.`
    },
    {
      id: 6,
      name: 'Nazish',
      image:`${Nazish}`,
      message: `Mehta Placements not only met but exceeded my expectations. Their training
      program played a pivotal role in securing a job that offers an attractive annual
      salary of almost 5 lakhs. I wholeheartedly recommend Mehta Placements to
      anyone looking to embark on a successful career journey. Their trainers are
      second to none.`
    },
    {
      id: 7,
      name: 'Shrinjoy Roy',
      image:`${Shrinjoy}`,
      message: `Mehta Placements has been the cornerstone of my career success. Their
      training program has not just refined my skills but propelled me into a job that
      comes with an impressive annual compensation of about 5.5 lakhs. The
      tireless commitment of Mehta Placements to help individuals achieve their
      career aspirations is genuinely inspiring.`
    }
  ]);
  const [startIndex, setStartIndex] = useState(0);
  const [item,setItem]=useState(3);
  const handleNextClick = () => {
    const newIndex = startIndex + 1;
    if (newIndex < data.length-item+1) {
      setStartIndex(newIndex);
    }
  };
  const handlePrevClick = () => {
    const newIndex = startIndex - 1;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  useEffect(() => {
    // Function to handle screen size change and update 'item' accordingly
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItem(1); // Set to 1 for smaller screens (e.g., xs)
      } else {
        setItem(3); // Set to 3 for medium or larger screens (e.g., sm, md, lg, xl)
        if(item>data.length-2) setStartIndex(data.length-2)
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data,item]);

  return (
    <Container style={{marginTop:50, marginBottom:10}}>
      <div style={{textAlign:'center'}}>
      <h3>Testimonials</h3>
      <p>What our students say about us</p>
      </div>
      <Row className="justify-content-center" style={{ alignItems: 'center', textAlign: 'center' }}>
        <Col xs={1} sm={1} md={1} lg={1}>
          <i className="bi bi-chevron-left" style={{ fontSize: 24, cursor: 'pointer' }} onClick={handlePrevClick}/>
        </Col>
        {
          data.slice(startIndex, startIndex + item).map((ele, idx)=>
            <Col xs={10} sm={5} md={3} lg={3} style={{ padding: 20 }} key={idx}>
              <div className="box text-center" style={{ padding: 10,boxShadow:'2px 2px 20px rgba(255, 0, 0, 0.5)'}}>
                <p style={{textTransform:'uppercase', fontWeight:600}}>{ele.name}</p>
                <img className="img-fluid" src={ele.image?ele.image:imgSrc} alt='img' style={{height:100,width:100,borderRadius:'50%'}}/>
                <p style={{height:200,overflowX: 'auto', marginTop:10 }}>{ele.message}</p>
              </div>
            </Col>
          )
        }
        <Col xs={1} sm={1} md={1} lg={1}>
          <i className="bi bi-chevron-right" style={{ fontSize: 24, cursor: 'pointer' }} onClick={handleNextClick}/>
        </Col>
      </Row>
    </Container>
  );
}