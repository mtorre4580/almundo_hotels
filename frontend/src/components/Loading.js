import React from 'react';
import styled from 'styled-components';

const Loading = () => (
    <ContainerSpinner className='d-flex justify-content-center'>
        <Spinner className='text-center m-auto'></Spinner>
    </ContainerSpinner>
);

const ContainerSpinner = styled.div`
    height: 100vh;
`;

const Spinner = styled.div`
    border: 16px solid #f5f5f5;
    border-radius: 50%;
    border-top: 16px solid #FF9800;
    width: 4em;
    height: 4em;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default Loading;