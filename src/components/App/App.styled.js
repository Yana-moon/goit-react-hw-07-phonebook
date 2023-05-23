import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: baseline;
gap: 40px;
margin: 10px auto;
padding: 10px;
width: 600px;
min-height: 300px;
max-height: max-content;
border-radius: 4px;
  background-color:  #f2ea94;
`;

export const SectionsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 40px;
justify-content: center;
align-items: center; 
    
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 30px;
  width: 600px;
  height: 570px;
  padding: 20px;
`;


export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 28px;
`;