import styled from 'styled-components';

export const Header = styled.div`{
    display: flex;
    align-items: center;
    margin: 15px;

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

export const Media = styled.div`{
    background-color: #f4f7fb;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    padding: 15px;

    div {
        margin-right: 8px;
    }

    img {
        height: 200px;
        width: 100px;
    }

}`;

export const Buttons = styled.div`{
    display: flex;
    width: 100px;

    button {
        height: 50px;
        width: 47%;
        margin-left: 3%;
        border: solid black 1px;
    }
}`;

