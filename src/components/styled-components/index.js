import styled from 'styled-components';

const Row = styled.div`
    flex-direction: row;
    display: flex;
`;

const Col = styled.div`
    flex-direction: column;
    display: flex;
`;

const ButtonOutline = styled.button`
    border: 2px solid var(--color-primary);
    transition: all 0.05s ease-in-out;
    box-shadow: 0 0 5px 0 black;
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
    &:hover {
        background-color: rgba(0, 0, 0, 0.35);
        color: white;
    }
`;

const PrimaryTitle = styled.h1`
    color: var(--color-primary);
    margin-bottom: 15px;
    font-weight: bold;
    display: flex;
    font-size: 2rem;
    & svg {
        margin-right: 5px;
        width: 2rem;
    }
`;

const StyledContainer = styled.div`
    margin: var(--container-margin);
    flex-direction: column;
    display: flex;
    &.center-children {
        justify-content: center;
        align-items: center;
    }
`;
const Container = ({ children, scroll = false, ...props }) => (
    <StyledContainer style={{ overflowX: scroll ? 'auto' : null }} {...props}>
        {children}
    </StyledContainer>
);

export {
    ButtonOutline,
    PrimaryTitle,
    Container,
    Col,
    Row,
};
