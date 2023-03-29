import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ceoimg from "../Images/Jagan Mohan Gudluru.png" 
import { style } from '@mui/system'

const Container=styled.div`
    margin:10px 80px 80px 80px;
`
const Heading=styled.h1`
    margin-top:30px;
    margin-left: 40px;
    border-left:5px solid orange;
    padding-left:10px;
    background-color:lightgoldenrodyellow;
    font-family: 'Tilt Neon', cursive;
`
const SubHeading=styled.h2`
    
`
const Sub=styled.h3`
    color:#${props=>props.color};
`
const Para=styled.p`
    margin:15px;
    font-family: 'Fira Sans', sans-serif;
    font-weight:400;
    font-size:1.2em;
    //text-indent:25px;
    
`
const FirstPara=styled(Para)`
text-indent:25px;
    &::first-letter{
        font-size:200%;
       
    }
`
const About = () => {
    const styled={
        qutation:{
            fontStyle:"italic",
            fontWeight:"bold",
            fontSize:"1.1em",
            color:"darkblue",
        },
        qutoTitle:{
            color: "#44b15a"
        }
    }
  return (<>
      <Navbar/>
    <Heading>
        ABOUT OUR FOUNDER
    </Heading>
    
        <Container>  
    <div>
        <div style={{marginBottom:"25px"}}>
            {/* Jangan Mohan Image */}
            <img src={ceoimg} height="250px" style={{float:"left",margin:"10px"}}></img>
            <FirstPara>
                <b>Jagan Mohan Gudluru</b> is a Mechanical Engineering Graduate and he also did MSIS from S.V. University, Tirupati.
            Started his career in 1988 with Nelcast Limited, a ferrous foundry engaged in manufacturing Grey & S.G. Iron castings
            for automobiles & indian Railways Worked for 7 years in Production planning. Process Control & Quality Assurance.
            </FirstPara>
        </div>

        <Para>
            Joined Amara Raja Group in the year 1995 and took voluntary retirement in July 2001.
        Worked in various functions like Project management, Supply Chain Management and Operations management in diversified
        businesses like Lead Acid Batteries, Metal Forming to Food Processing.
            His last assignment was Head of Operations in the position Executive Vice President in Amara Raja Batteries Ltd.
        He was responsible for managing 9 Battery plants in two locations having around 8500 employees. Amara Raja is producing 
        various kinds of batteries for Automotive, Telecom, Railways, Defence, UPS & Inverter etc.
        </Para>

        <Para>
            
            He implemented 5S, Six Sigma TPM, Quality Circles. Suggestion Schemes etc. Japanese quality concepts and 
        "Best Practices" in the shop floor and transformed Amara Raja as a "World Class Manufacturing facility.
            In his Leadership Amara Raja Batteries won the "Best organisation awards" in National levels QCFI conventions and 
        the Gold Awards in the international competitions (ICQC) for the last many years. For 5S Excellence the Amara raja won
        the 1st Prizes by CII and ABK-AOTS in his stewardship.
            In his leadership the Amara Raja has become the "Role Model" in the area of Six Sigma in the country by implementing 
        highest number of projects with largest number of Black belts (145) and Green belts (550). Continued to win National level 
        Awards in Six Sigma Every Year.
        </Para>
        <Para>
            He turned-around the loss making Food Processing business-Golia Foods into a Profit making one by adopting 
            "Good Manufacturing Practices" (GMP), 5S practices and Re-Engineering processes.
        </Para>
        <Para>

            Received an Award from the "Chief Minister of Andhra Pradesh" Sri N. Chandra Babu Naidu for the "Outstanding 
        Performance in Manufacturing Sector" to Amara Roja for the year 2015. For his excellence contribution in the area of Quality 
        Culture Building, The Quality Circle Forum of India (QCFI) recognised him with National Level "Quality Leadership Award" 
        for the year 2015.
        </Para>

        <Para>

            He is the founder Chairman for the Quality Circle Forum of India Tirupati Chapter since 2015. In his leadership, 
        the Tirupati Chapter grown very fast and became the country's largest chapter in India. He is also the Vice President 
        for the ABK-AOTS DOSOKAL, Chennai Centre for actively promoting the quality culture in the industry bodies. 
        He served as a member of Agricultural Sub-Committee of CII Andhra Pradesh and CII Southern Region.
        </Para>
    </div>
    </Container>
    <Heading>
        CORE IDEOLOGY
    </Heading>
    <Container>
        <Para>
            Core ideology defines the company's timeless character. The core ideology is the invisible bonding that holds the enterprise 
            together even when everything else is up for grabs. Core ideology is something to discover by looking inward.
        </Para>
        <Para>
         People and things may change with time, new technology may emerge, current products may fade, existing suppliers & customers may disappear, 
            time to time, the new leadership team may take the charge of the business, but the core ideology endures as a source of 
            guidance and inspiration in our enterprise.
        </Para>
    <SubHeading>
        CORE PURPOSE
    </SubHeading>
    <Para>
        Core Purpose reflects the authentic, idealistic motivations for doing enterprise work.
        The core purpose is the glue that unify the company together. It is a deeper reason for
        our existence beyond just making money.
    </Para>
    <Para>
        Our aim is to make every employee understand the core purpose and keep it in their
        heart, demonstrate in every act they do. When people come to work, they shall
        remember the purpose of their job. When they understand that they are serving for a
        greater purpose, they will continue to anchor their activities around the core purpose.
    </Para>
    <Para>
        Well communicated core purpose, inspires everyone to dedicate their time & energy Engaged employees feel a profound connection to the 
        enterprise and work passionately, Engaged and passionate people constantly strive to build an everlasting company by creating new ideas, new processes, new products & new customers
       
    </Para>
    <center style={styled.qutation}>
               <dir style={styled.qutoTitle}>Our Core Purpose:</dir> 
            Transform an ordinary to an extraordinary.
        </center>
        <br></br>
    <SubHeading>
        CORE VALUES
    </SubHeading>
    <Para>
            Out of many values the Five Values core to the Enterprise. These five are equally
        important to run the enterprise more meaningfully.
    </Para>
    <Para>
        Core values are the principles and standards of the very center of our character, and from which we 
        will not deviate at any time. We formed core values based on our experiences, beliefs, and ethical and sustainability practices.
    </Para>
    <Para>
        Values and beliefs form our attitudes and guide our behavior. The behaviours we
        engage in, are what people around us see, along with our skills and actions.
    </Para>

    <Para>
        Our core values help to set our priorities in order, Core values are the basis to take business decisions and plan strategies by any employee
        of our company, Core values affect our practices and interaction with our stakeholders. We strongly believe that our Core
        Values are powerful to shape company's culture. A positive culture drives strong growth with better profits
    </Para>
    <div style={{marginLeft:"15px"}}>
    <Sub color='4b0082'>
        Integrity: 
    </Sub>
    <Para>
            Integrity is choosing our thoughts and actions based on character rather than personal gains. It is the alignment of our words, 
        both internal and external Integrity is not something we show to others; it is how we behave behind their back. Integrity is 
        choosing courage over comfort. Integrity is not a simple matter.
    </Para>
    <Para>
        Our enterprise strength is derived from the integrity of our employees. We focus on
        hiring character, and impart knowledge and train the skills even later.
    </Para>
    <Para>
            Excellence is the result of habitual integrity. The great people are ordinary people who do ordinary things extraordinarily 
        with integrity Integrity brings the identity, dignity and trustworthiness to an individual Integrity inspires trust.
    </Para>
    <Para>
            The supreme quality of a leader is unquestionable integrity, integrity is the coherence
        that holds all relationships together - including the relationship between the leader
        and the lead. Integrity is holding fast our convictions regardless of consequences
        Never compromising ideals even, it affects the profitable growth of our enterprise.
    </Para>
    <Sub color='ffd700'>

        Ownership:
    </Sub>
    <Para>
        Ownership is the act or state of possessing responsibility, accountability, commitment, dedication, and learning, risk 
        taking, challenging and connecting An ownership mindset can become a means for experiencing the psychological need for 
        competence and growth.
    </Para>
    <Para>
        Ownership means caring, which means-supporting, encouraging, listening, accepting. trusting, respecting and negotiating 
        the differences if any Caring of Customers, Partners Suppliers, Employees and Communities will establish a positive 
        ambiance oround us
    </Para>
    <Para>
        When we practice ownership, we will have all the power in the world to give much and receive even more. Everyone in the
         enterprise can practice, irrespective of position and hierarchy. We believe they accept personal responsibility for 
         keeping.costs low, encouraging innovation, and maximizing the profits.
    </Para>
    <Sub color='ee82ee'>
       
        Creativity:
    </Sub>
    <Para>
        Creativity is thinking beyond existing boundaries, to induce curiosity, to break away
        from rational, conventional ideas and formalized procedures. Creativity is the ability to
        generate new ideas by combining, changing, or re-applying existing ideas. Creativity
        is breaking out of all established patterns in order to look at the things in different way.
    </Para>
    <Para>
        Everyone has substantial creative ability. If we start thinking now, something new will flow. Explore that something
        new today and we will be a different personality tomorrow. Creativity is an attitude, the ability to accept change and 
        newness
    </Para>
    <Para>
        Creativity and innovation are normally complementary activities since creativity
        generates the basis of innovation It is not possible to conceive innovation without
        creative ideas, as this is the starting point. Innovation is the production or
        implementation of a creative idea.
    </Para>
    <Para>
        Creativity requires passion and commitment Creative person will work hard and continually to improve ideas and solutions, 
        by making gradual alterations and refinements to their works. The future growth of the organizations will increasingly depend 
        on the creativity of their members The economic future of an enterprise depends on its ability to create wealth by fostering 
        creativity and entrepreneurship.
    </Para>
    <Sub color='ff7f50'>
        Passion:
    </Sub>
    <Para>
        Passion is the strong devotion, emotion and enduring mindset to produce an impact on what we do. Passion is closely associated 
        with drive, enthusiasm, limitless energy. motivation, and the push. Passion and purpose go hand in hand. Passion shall be engrained 
        in body and soul for outstanding performance of any organisation
    </Para>
    <Para>
        Passionate people are usually ambitious. They want to have a say in the field that
        they love They read about it study it, embrace it and never really escape from it
    </Para>
    <Para>
        The most powerful weapon on earth is the human soul on fire. Only passions, the great passions, can elevate the soul to greater heights. 
        A strong leader's courage to fulfill his vision comes from passion, not the position. They renew passions daily,
    </Para>
    <Sub color='c7b2b2'>
        Purity:
    </Sub>
    <Para>
        Purity is the ability to recognize the essential nature of any form. Without purity of heart, 
        there is no purity of thought. Purity is uncompromising core value to our enterprise.
    </Para>
    <Para>
        Pure is often associated with peace, innocence, cleanliness, freshness, wholesomeness chastity, spotlessness, 
        impeccability, simplicity, sterility and reverence. Pure con also mean complete or absolute, especially when it 
        describes happiness
    </Para>
    <Para>
        At the end of the day, a person is at peace because his intentions are good and heart is pure Purity and simplicity 
        are the two wings with which someone can soar to skies
    </Para>
    </div>
    <SubHeading>
        CANVAS & RUDDER
    </SubHeading>
    <Para>
        What is important to our organization to focus? As an organisation what are our aspirations, goals, beliefs and values? 
    How is our organisation identified or distinguished from the rest by our employees and stakeholders? What is the basis for 
    developing of our strategic plans? What is there in heart of the organisation?
    </Para>
    <Para>
    So, it is very critical to express and make people to understand what is the basic need of existence of this organisation? 
    The purpose of this section is to provide guidance for developing and implementing our organization's core purpose, vision 
    and mission statements
    </Para>
    <div style={{marginLeft:"15px"}}>
    <Sub color='ee82ee'>
        Vision
    </Sub>
    <Para>
        Our Vision is a compelling and futuristic statement of a desirable state of reality mode possible by accomplishing the
        mission in a way that is consistent with our core values it is picture of the future we are working to create, what we
        want to be when we grow up, what we want our business to become
    </Para>
    <center style={styled.qutation}>
        <dir style={styled.qutoTitle}>Vision Statement for Gudiuru Industries:</dir> We will be the customer's first choice through value creation.
        <br></br>
    </center>
    <Sub color='ff7f50'>
        Mission:
    </Sub>
    <Para>
        Our Mission deals with questions like. "Why are we here?" "Why do we exist?" "Why do we get up each day and do what
         we do?". "What is it that we get paid for?" "What function does the organization perform? For whom? How?"
    </Para>
    <Para>
        Our mission statement reflects the core values and beliefs of our company. It is our
        necessary tool to inform others about what's important to us and how we operate our
        business
    </Para>
    <Para>
        It serves as an anchor and guidepost for both strategic and operational or tactical decision making on our business. 
        It describes its central purpose and the basic principles that guide the actions of our employees, partners, and 
        management. The mission statement also provides direction to our enterprise
    </Para>
    <center style={styled.qutation}>
        <dir style={styled.qutoTitle}>Mission Statement for Guduru Industries:</dir>
         We inspire the people to explore innovation in their workplace, for making the difference to all the stakeholders in our business.
         <br></br>
    </center>
    </div>
</Container>
    <Newsletter/>
    <Footer/>
    
    </>
  )
}

export default About
