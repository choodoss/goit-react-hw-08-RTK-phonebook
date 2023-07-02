import React from 'react';
import { Typography } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { CloseIcon, ModalContainer } from './AboutUser.styled';
import { selectorUser } from '../../storage/selectors';
import { useSelector } from 'react-redux';

const UserInfoModal = ({ hendleClose }) => {
    const { userName, userEmail } = useSelector(selectorUser);
    return (
        <ModalContainer>
            <CloseIcon onClick={hendleClose}>
                <MdClose />
            </CloseIcon>
            <Typography variant="h3" gutterBottom>
                User Details
            </Typography>
            <Typography variant="body1" gutterBottom style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px' }}>
                Никнейм: {userName}
            </Typography>
            <Typography variant="body1" style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '4px' }}>
                Почта: {userEmail}
            </Typography>
        </ModalContainer>
    );
};

export default UserInfoModal;