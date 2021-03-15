import styled from 'styled-components';


export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #FFF;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: 0.3s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`