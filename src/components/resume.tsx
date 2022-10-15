import React from 'react';

export default function Resume() {
  return (
    <div className='Resume'>
      <h1 className='startHeader'>EXPERIENCE</h1>
      <div className='Experience'>
        <h3 className='itemTitle'>Company Name</h3>
        <h5 className='textTitle'>Web & Graphics Designer</h5>
        <p className='textItem'>Company Name is very helpful for me. I have worked for 1 year in this company like Web, UI/UX,And Graphics designer With some WordPress Skills.</p>

        <h3 className='itemTitle'>Company Name</h3>
        <h5 className='textTitle'>Web|UI|Graphics Designer</h5>
        <p className='textItem'>Company Name is very helpful for me. I have worked for 1 year in this company like Web, UI/UX,And Graphics designer With some WordPress Skills.</p>

        <h3 className='itemTitle'>Company Name</h3>
        <h5 className='textTitle'>Front-End Developer|UI|Designer</h5>
        <p className='textItem'>Company Name is very helpful for me. I have worked for 1 year in this company like Web, UI/UX,And Graphics designer With some WordPress Skills.</p>
      </div>

      <h1 className='startHeader'>EDUCATION</h1>
      <div className='Education'>
        <h3 className='itemTitle'>University Name</h3>
        <h5 className='textTitle'>Bsc(Information Technology)</h5>
        <p className='textItem'> I have done my bachelor degree in CU shah University. I'm a Bachelor in Science Area of Information Technology </p>


        <h3 className='itemTitle'>University Name</h3>
        <h5 className='textTitle'>Web | Graphics Design Course</h5>
        <p className='textItem'> I have done my Web, Graphics And UI Design Course in Tops Technology. In this course, I learn Responsive Web Design and All types of Graphics Design</p>
      </div>

      <div className='languagesAndSkills'>
        <div className='proffessionalSkills'>
          <h1 className='startHeader'> PROF.SKILLS&LANGUAGES SKILLS</h1>
          <h2 className='skillHeader'>PROFFESSIONAL SKILLS</h2>
          <ul>
            <li>WEB DESIGN</li>
            <li>UI/UX DESIGN</li>
            <li>GRAPHICS DESIGN</li>
            <li>WORDPRESS</li>
          </ul>
        </div>
        <div className='languagesSkills'>
          <h1 className='startHeader'>LANGUAGES SKILLS</h1>
          <ul className='languages'>
            <li>ENGLISH</li>
            <li>HINDI</li>
            <li>GUJARATI</li>
          </ul>
        </div>

        <div className='reference'>
          <h1 className='startHeader'>REFERENCE</h1>
          <h3 className='textTitle'>STEVEN LAW</h3>
          <ul className='referenceItems'>
            <li>CEO of Delta Mandiri(Indonasia)</li>
            <li>Phone: +62-000-0000-000</li>
            <li>Email:emailid@email.com</li>
          </ul>

          <h3 className='textTitle'>PATRIK JAMNAPARA</h3>
          <ul className='referenceItems'>
            <li>Audit Assistant|Paresh Thothawala & Co.</li>
            <li>Phone: +91- 00000 00000</li>
            <li>Email:emailid@email.com</li>
          </ul>
        </div>

      </div>

      <div className='entireProfile'>
        <div className='personalProfile'>
          <h1 className='personalName'>AJAY GORECHA</h1>
          <h2 className='personalTitle'>WEB & GRAPHICS DESIGNER</h2>
          <h4 className='profile'>PROFILE</h4>
          <p className='profileDescription'>I have completed mu bachelor degree in BSc(Information Technology) from CU Shah University. I have 3 years or more Experience in designing.<br></br>
            When working on a new project, I like to speak with my clients/boss so that I can have a clear understanding of their needs and vision of the project
          </p>

        </div >
        <div className='contact'>
          <h4 className='profile'>CONTACT</h4>
          <ul className='contactList'>
            <li>Your local address will go here, you can address here</li>
            <li>+91- 00000 00000 </li>
            <li>+91 -00000 00000 </li>
            <li>ajaygorecha.designer@gmail.com</li>
          </ul>

          <div className='socialMedia'>
            <h4 className='profile'>SOCIAL MEDIA</h4>
            <ul className='socialMediaListItems'>
              <li>www.dribble.com/gorechajay</li>
              <li>www.behance.net/gorechajay</li>
              <li>www.linkedin.com/in/ajaygorecha</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

