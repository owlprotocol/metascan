import styled from 'styled-components';

export const GradBorderWrapper = styled.div`
    background: linear-gradient(269.68deg, #00f3b9 8.63%, #2091f9 50.28%);
    width: 100%;
    height: 64px;
    border-radius: 10px;
    padding: 2px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 101%;
    height: 60px;

    > div {
        display: flex;
    }

    button {
        display: inline-block;
        width: 75px;
        height: 60px;
    }

    .btn-menu {
        background-color: #fff;
        border-radius: 10px 0 0 10px;
        flex: 1 0 75px;
    }

    .btn-camera {
        width: 96px;
        background-color: #fff;
    }

    .btn-search {
        background-color: #008392;
        border-radius: 10px;
        position: relative;
        right: 9px;
    }

    input {
        height: 60px;
        width: 100%;
        padding: 0 0 0 12px;
        border: 0;
        border-radius: 10px;
    }
`;
