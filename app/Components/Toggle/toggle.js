import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Toggle = ({ onClick, expanded }) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StyledWrapper>
      <div onClick={onClick} className={`burger ${expanded ? 'open' : ''}`}>
        <span className="span1" />
        <span className="span2" />
        <span className="span3" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    display: inline-block;
    cursor: pointer;
    z-index: 1000;
  }

  .span1, .span2, .span3 {
    display: block;
    width: 30px;
    height: 2px;
    background: #ffffff;
    margin: 6px 0;
    transition: transform 0.4s, opacity 0.4s ease;
  }

  .span1 {
    width: 50px;
  }

  .span2 {
    width: 35px;
  }

  .span3 {
    width: 20px;
  }

  .burger.open .span1 {
    transform: translateY(8px) rotate(45deg);
    background: #ff7500;
  }

  .burger.open .span2 {
    opacity: 0;
    transform: translateX(-20px);
    background: #ff7500;
  }

  .burger.open .span3 {
    transform: translateX(10px) translateY(-5px) rotate(-45deg);
    width: 40px;
    background: #ff7500;
  }

  @media (max-width: 992px){
    .burger{
      margin-bottom: 35px;
    }
  }

  @media (max-width: 576px){
    .burger{
      margin-bottom: 25px;
    }
  }
`;

export default Toggle;
