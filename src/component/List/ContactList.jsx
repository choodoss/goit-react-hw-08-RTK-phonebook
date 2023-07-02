import PropTypes from 'prop-types';
import { List, Box, Avatar, ListItem, IconButton, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { IoIosContact } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { nanoid } from '@reduxjs/toolkit';

export default function ContactList({ contacts, handleContactRemove }) {
    const contactList = contacts ? contacts : [];

    return (
        <Box maxWidth={400} margin={'0 auto'}>
            <List>
                {contactList.length !== 0 &&
                    contactList.map(({ id, avatar, name, number }) => (
                        <ListItem sx={{ padding: 0, paddingBottom: '0.3rem' }} key={nanoid()} secondaryAction={<IconButton edge="end" aria-label="delete" id={id} onClick={handleContactRemove}><RiDeleteBin6Line /></IconButton>}>
                            <ListItemAvatar>
                                <Avatar fontSize="large">
                                    {avatar ? <img height={'40px'} width={'40px'} src={avatar} alt={name} /> : <IoIosContact size={30} />}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1" component="span" style={{ fontSize: '0.8rem' }}>
                                    {name}: {number}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    ))}
            </List>
        </Box>
    );
}

ContactList.propTypes = {
    handleContactRemove: PropTypes.func,
    getFilterContacts: PropTypes.array,
};






