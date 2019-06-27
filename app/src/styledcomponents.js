import styled from 'styled-components';

export const Header = styled.div`{
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    img {
        width: 50px;
        height: 50px;
        border-radius: 30%;
    };

    div {
        display: flex;
        flex-direction: column;
        margin: 15px;

        p {
            color: green;
            margin-top: 5px;
        };
    };

}`;


