import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { homeDescription } from '../../data/aboutMe';

const Banner = styled.div`
    position: relative;
    padding: 0em;
`;

const ProfileContainer = styled.div`
position:relative;
    left: 35%;
    width: 30%;
    padding-bottom: 1.5em;
    @media (max-width: 992px){
        left:15%;
        width: 70%;
    }
    @media (max-width: 400px){
        left:15%;
        width: 70%;
    }
`

const HiText = styled.div`
    font-family: Georgia, Garamond;
    display:inline-block;
    @media (max-width: 550px){
        font-size: 55pt;
        line-height: 85pt;
    }
    @media (max-width: 400px){
        font-size: 50pt;
        line-height: 80pt;
    }
`
const InterludeText = styled.span`
    font-family: Georgia, Garamond;
    display:inline-block;
    vertical-align: bottom;
    margin-left: 7%;
    @media (max-width: 550px){
        font-size: 18pt;
    }
    @media (max-width: 400px){
        font-size: 16pt;
    }
`
const FirstNameText = styled.h1`
    text-align: center;
    @media (max-width: 550px){
        font-size: 55pt;
        line-height: 55pt;
        padding-top: 10pt;
    }
    @media (max-width: 400px){
        font-size: 50pt;
        line-height: 50pt;
    }
`
const LastNameText = styled.h1`
    text-align: right;
    @media (max-width: 550px){
        font-size: 55pt;
        line-height: 55pt;
    }
    @media (max-width: 400px){
        font-size: 50pt;
        line-height: 50pt;
    }
`
const DescriptionContainer = styled.div`
    position: relative;
    left: 20%;
    width: 60%;
    @media (max-width: 992px){
        left:15%;
        width: 70%;
    }
    @media (max-width: 400px){
        left:15%;
        width: 70%;
    }
`

const DescriptionText = styled.div`
    font-family: Georgia, Garamond;
    font-size:20pt;
    @media (max-width: 550px){
        font-size: 18pt;
    }
    @media (max-width: 400px){
        font-size:16pt;
    }
`

const skillPanels = [
  {
    title: 'Go',
    description: '\
    Built high volume, distributed applications for use globally by millions of players. \
    Delivered many applications from conception to production. Tuned and refined application configurations to support thousands of RPS.\
    Profiled, load tested and developed testing suites for production applications and performed extensive optimizations to advance system performance. \
    Maintained idiomatic golang code adhering to strong interface design, reusability and maintainability.\
    ',
  },
  {
    title: 'Kubernetes',
    description: '\
    Built and tuned highly available Kubernetes configurations serving millions of users. \
    Used built in and cloud native tools to deploy and maintain complex architectures. \
    Provided secure and reliable communication to and between services including auth and encryption.\
    ',
  },
  {
    title: 'AWS',
    description: '\
    Delivered applications in the cloud using AWS serverless and servered solutions.\
    Used kubernetes in AWS coupled with AWS tools to deliver performant applications.\
    ',
  },
  {
    title: 'Postgres',
    description: '\
    Implemented database migrations, schemas, and queries to postgres. Optimized queries using database analytics.\
    Developed services with both standard postgres, as well as distributed solutions such as Yugabyte and CRDB. \
    Compared solutions like Aurora DB with other distributed databases to find optimal solutions for both economics and performance. \
    ',
  },
  {
    title: 'C#',
    description: '\
    Delivered web applications on C# .NET in a high security, reliability focused development environment. \
    Sunsetted high volume, mission critical, backend services in a system requiring perfect accuracy and traceability. \
    Lead and mentored a team of contract developers in delivering highly performant, compliant and well architected solutions \
    that aligned to enterprise timelines and requirements. Identified dependencies and blockers while planning with project leadership. \
    ',
  },
];

const CarouselViewport = styled.div`
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: ${(props) => (props.$total * 100) / 3}%;
  @media (max-width: 992px) {
    width: ${(props) => (props.$total * 100) / 2}%;
  }
  @media (max-width: 576px) {
    width: ${(props) => props.$total * 100}%;
  }
`;

const CarouselPanel = styled.div`
  flex: 0 0 ${(props) => 100 / props.$total}%;
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

const useVisibleCount = () => {
  const getCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.matchMedia('(max-width: 576px)').matches) return 1;
    if (window.matchMedia('(max-width: 992px)').matches) return 2;
    return 3;
  };
  const [count, setCount] = useState(getCount);
  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return count;
};

const SkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const total = skillPanels.length;
  const maxIndex = Math.max(0, total - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [currentIndex, maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goToSlide = (index) => setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));

  const translatePercent = currentIndex * (100 / total);

  return (
    <div className="container-fluid px-0" style={{ paddingTop: '10em' }}>
      <div className="row g-0 justify-content-center">
        <div className="col-12" style={{ width: '90%', margin: '0 auto' }}>
          <div className="position-relative">
            <CarouselViewport>
              <CarouselTrack
                $total={total}
                style={{ transform: `translateX(-${translatePercent}%)` }}
              >
                {skillPanels.map((panel, idx) => (
                  <CarouselPanel key={idx} $total={total}>
                    <div className="card shadow-lg border-0 h-100">
                      <div className="card-body p-4">
                        <h2 className="card-title h3 fw-bold darkest-text mb-3 text-center">
                          {panel.title}
                        </h2>
                        <p className="card-text text-muted mb-0 lh-base">
                          {panel.description}
                        </p>
                      </div>
                    </div>
                  </CarouselPanel>
                ))}
              </CarouselTrack>
            </CarouselViewport>

            <button
              type="button"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="position-absolute top-50 start-0 translate-middle-y"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                marginLeft: '15px',
                opacity: currentIndex === 0 ? 0.4 : 1,
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                zIndex: 2,
              }}
            >
              <ChevronLeft size={24} className="darkest-text" />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="position-absolute top-50 end-0 translate-middle-y"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                marginRight: '15px',
                opacity: currentIndex >= maxIndex ? 0.4 : 1,
                cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
                zIndex: 2,
              }}
            >
              <ChevronRight size={24} className="darkest-text" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`btn btn-sm rounded-circle me-2 ${
                  index === currentIndex ? 'btn-success' : 'btn-outline-secondary'
                }`}
                style={{
                  width: '12px',
                  height: '12px',
                  padding: '0',
                  minWidth: 'unset'
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => (
  <Banner className='banner-top-offset'>
    <ProfileContainer>
      <HiText className='text-gradient-accent-to-bright left-justified xxl-font'>Hi!</HiText>
      <InterludeText className='text-gradient-light-to-bright left-justified m-font'>My name is</InterludeText>
      <FirstNameText className='text-gradient-accent-to-bright xxl-font left-justified script-font'>Bradley</FirstNameText>
      <LastNameText className='text-gradient-accent-to-bright xxl-font left-justified script-font'>Mader<span className='text-primary left-justified sans-serif-font xxl-font'>.</span></LastNameText>
    </ProfileContainer>
    <DescriptionContainer>
      {homeDescription.map((paragraph, index) => (
        <DescriptionText key={index} className='text-gradient-light-to-bright m-font left-justified' style={{ paddingTop: index > 0 ? '1em' : '0' }}>{paragraph}</DescriptionText>
      ))}
    </DescriptionContainer>
    <SkillsCarousel />
  </Banner>
);
