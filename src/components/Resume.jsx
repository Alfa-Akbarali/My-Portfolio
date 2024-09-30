import React from 'react';
import { Link } from 'react-router-dom';
import './Style_rezume.scss';
import ResumeImg from '../../assets/ResumeImg.jpg';
const Resume = () => {
  document.addEventListener('contextmenu', event => {
    if (event.target.nodeName === 'IMG') {
      event.preventDefault();
    }
  });
  return (
    <div className='resume_container'>
      <div className='image_box'>
        <Link to="http://localhost:3000/static/media/Resumefile.c259ce161cb80ddfcd60.pdf" target="_blank" rel="noopener noreferrer">
          <img src={ResumeImg} alt="img" />
        </Link>
      </div>
      <div className='link_box'>
        <div>
          {/* <p>To download my Resume:</p> */}
          {/* <a className='resume_downloader' href={RezumeFile}>Download</a> */}
        </div>
        <Link className='back_btn' to="/">Home</Link>
      </div>
    </div>
  )
}

export default Resume;
