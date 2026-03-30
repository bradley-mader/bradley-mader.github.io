import React from 'react';
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader';
import { useImageLoader } from '../../hooks/useImageLoader';
import { bioIntro, professionalSynopsis, professionalPassion, employers, education } from '../../data/aboutMe';

const FamilyContainer = styled.div`
    margin: 4vw;
    overflow: hidden;
`

const FamilyBanner = styled.div`
    font-family: Georgia, garamond;
    font-size: 22pt;
    @media (max-width: 1300px){
        font-size: 18pt;
    }
    @media (max-width: 1100px){
        font-size: 16pt;
    }
    @media (max-width: 900px){
        font-size: 12.5pt;
    }
    @media (max-width: 700px){
        font-size: 12pt;
    }
    & .fb-content{
        display: inline-block;
        vertical-align:middle;
        padding: 2em 2em 2em 2em;
        @media (max-width: 1300px){
            margin-left:0;
        }
    }
    & .fb-image{

    }

    & * .title-banner-image{
        width:100%;
    }
`

const FamilyBannerPhoto = styled.div`
    & img{
        width:100%;
    }
`

const PairImage = styled.img`
    position:relative;
    height:256px;
    width:256px;
    @media (max-width: 650px){
        height: 128px;
        width: 128px;
    }
`

const EmployerCard = ({ employer, onImageLoadStart, onImageLoad }) => (
  <div>
    <div className="full-width text-centered white-background">
      <img
        src={employer.logo}
        alt={employer.logoAlt}
        onLoadStart={onImageLoadStart}
        onLoad={onImageLoad}
        style={{ width: employer.logoWidth, padding: '10px' }}
      />
    </div>
    <div style={{ padding: '1em 0em 0em 0em', width: '100%', display: 'inline-block' }}>
      <b>{employer.title}</b> for <b>{employer.name}</b> working on <b>{employer.focus}</b>.
      <ul>
        {employer.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const AboutMe = () => {
  const { isLoading, onImageLoadStart, onImageLoad } = useImageLoader(7);

  return (
    <div className='darkest-text'>
      {isLoading && (
        <div className="loading_symbol" style={{ width: '100px', margin: 'auto' }}>
          <HashLoader color="#dc4875" size={50} />
        </div>
      )}
      <FamilyBannerPhoto className='banner-top-offset'>
        <img className='fb-image' src='fam_foto.jpeg' onLoadStart={onImageLoadStart} onLoad={onImageLoad} alt="" />
      </FamilyBannerPhoto>
      <FamilyContainer className='dark-text' style={{ display: !isLoading ? 'block' : 'none' }}>
        <div className='fb-image half-width small-pad' style={{ marginLeft: "25%" }}>
          <img src='Washington.jpg' className='full-width' onLoadStart={onImageLoadStart} onLoad={onImageLoad} alt="" />
        </div>
        <FamilyBanner className='text-centered white-background smooth_corners small-pad'>
          <div className='text-left-justified white-background smooth_corners small-pad-bottom'>
            <p>{bioIntro.familyDescription}</p>
            <p>{bioIntro.hobbiesIntro}</p>
          </div>
          <p><PairImage src='running_text.png' alt="" /><PairImage src="runner.png" alt="" /></p>
          <p><PairImage src="vg_controller.png" alt="" /><PairImage src="gaming_text.png" alt="" /></p>
          <p><PairImage src="cooking_text.png" alt="" /><PairImage src="Cooking.png" alt="" /></p>
        </FamilyBanner>
        <FamilyBanner>
          <div className='fb-content white-background smooth_corners xlarge-margin-top'>
            <div className='fb-image inline-block large-shift-up half-width text-centered full-width half-x-padding'>
              <img src='Professional_Synopsis.png' className="large-shift-up full-width" alt="" onLoadStart={onImageLoadStart} onLoad={onImageLoad} />
            </div>
            <div>
              {professionalSynopsis}
              <br /><br />
              {professionalPassion}
            </div>
          </div>
        </FamilyBanner>
        <FamilyBanner>
          <div className='fb-content white-background xxlarge-margin-top smooth_corners'>
            <div className='inline-block large-shift-up half-width text-centered full-width half-x-padding'>
              <img src='Professional_History.png' className="large-shift-up full-width" alt="" onLoadStart={onImageLoadStart} onLoad={onImageLoad} />
            </div>
            {employers.map((employer) => (
              <EmployerCard
                key={employer.name}
                employer={employer}
                onImageLoadStart={onImageLoadStart}
                onImageLoad={onImageLoad}
              />
            ))}
          </div>
        </FamilyBanner>
        <FamilyBanner className='smooth_corners no-overflow white-background side-to-stackable' style={{ marginTop: "2em" }}>
          <div className='fb-image'>
            <img className="full-width" src='Education.jpg' alt="" onLoadStart={onImageLoadStart} onLoad={onImageLoad} />
          </div>
          <div className='fb-content white-background'>
            <div className='fb-content-small'>
              {education}
            </div>
          </div>
        </FamilyBanner>
      </FamilyContainer>
    </div>
  );
};
