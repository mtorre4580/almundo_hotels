import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CollapsableWithIcon = ({title,icon,id,children}) => (
    <div className='mb-1'>
        <div className='container py-1 d-flex flex-row justify-content-between bg-white'>
            <LabelWithIcon icon={icon}>{title}</LabelWithIcon>
            <a className='btn d-block' data-toggle='collapse' role='button' href={`#${id}`} >
                <i className='mdi mdi-menu-up' aria-hidden='true'></i>
            </a>
        </div>
        <div className='container bg-white py-1' id={id}>
            {children}
        </div>
    </div>
);

export default CollapsableWithIcon;

CollapsableWithIcon.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.object
}

const Label = styled.label`
    background-repeat: no-repeat;
    color: #0277BD;
    background-image : url(${props => props.icon});
    padding-left: 2em;
`;

const LabelWithIcon = ({children,icon}) => (
    <Label className='text-left my-auto' icon={`../assets/icons/filters/${icon}.svg`}>
        {children}
    </Label>
);
