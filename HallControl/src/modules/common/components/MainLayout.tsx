import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`;

const Body = styled.div`
width: 100%;
height: 100%;
`;

interface MainLayoutProps {
    children: React.ReactNode
}

function MainLayout(props: MainLayoutProps) {
    return (
        <Container>
            <Body>
                {props.children}
            </Body>
        </Container>
    );
}

export default MainLayout;