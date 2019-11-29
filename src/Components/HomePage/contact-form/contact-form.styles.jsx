import styled from 'styled-components';

export const ContactFormWrapper = styled.section`
    margin: 6rem auto;
    text-align: center;
    padding: 0 30px;

     h2 {
        color:#3A7190;
        font-weight: 400;
    }

    p {
        font-weight: 900;
    }
    & > div {
        margin-bottom: 4rem;
    }

    @media (max-width: 768px){
        padding: 10px;
       }

`