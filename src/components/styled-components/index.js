import styled from 'styled-components';

const ButtonOutline = styled.button`
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 1);
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    text-decoration: none;
    display: inline-flex;
    border-radius: 4px;
    font-weight: bold;
    user-select: none;
    background: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 15px;
    outline: 0;
    &:focus {
        border-color: white;
        color: white;
    }
`;

const Container = styled.div`
    display: flex;
    margin: 50px;
    &.center-children {
        justify-content: center;
        align-items: center;
    }
`;

export {
    ButtonOutline,
    Container,
};
