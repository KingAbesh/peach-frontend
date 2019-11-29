import styled from 'styled-components';


export const BecomeWrapper = styled.section`
    margin-bottom: 4rem;
    padding: 0 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;

    & > div {
        margin: auto;
        text-align: center;

        h3 {
            font-weight: 900;
            color: #3A7190;
            margin: 3rem 0;
        }
        button {
            background: #3B7DD8 !important;
            &:hover {
                /* These important tags are necessary because I need to make sure nothing overrides this */
                background: #FFF !important;  
                color: #3B7DD8 !important;

            }
        }
    }
    @media (max-width: 768px){
            grid-template-columns: 1fr;
            width: 100%; 
            margin-top: -4rem; 
            & > div {
            margin-bottom: 4rem;
            }

        }

`