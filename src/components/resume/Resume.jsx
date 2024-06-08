import React from 'react';
import { Link } from 'react-router-dom';
import './Style_rezume.scss';
import ResumeImg from '../../assets/ResumeImg.jpg';
import RezumeFile from '../../assets/Resumefile.pdf'
const Resume = () => {
  document.addEventListener('contextmenu', event => {
    if (event.target.nodeName === 'IMG') {
      event.preventDefault();
    }
  });
  return (
    <div className='resume_container'>
      <div className='image_box'>
        <img src={ResumeImg} alt="img" />
      </div>
      <div className='link_box'>
        <div>
          <p>To download my Resume:</p>
          <a className='resume_downloader' href={RezumeFile}>Download</a>
        </div>
        <Link className='back_btn' to="/">Home</Link>
      </div>
    </div>
  )
}

export default Resume;
