import { useDispatch, useSelector } from "react-redux";
import { selectorUser } from "../../storage/selectors";
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { logout } from "../../storage/Thunks";
import { clearState } from '../../storage/contactsSlice'

const StyledUserHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    maxWidth: '400px',
    margin: '0 auto',
});

const UserHeader = ({ hendleOpen }) => {
    const { userName } = useSelector(selectorUser);
    const dispatch = useDispatch();
    const hendleLogOut = () => {
        dispatch(clearState())
        dispatch(logout());
    };

    return (
        <div>
            <StyledUserHeader>
                <Button onClick={hendleOpen}
                    variant="outlined">
                    {userName ?? 'Anonimus'}
                </Button>
                <Button onClick={hendleLogOut} variant="contained" color="primary">LogOut</Button>
            </StyledUserHeader>
        </div>
    );
};

export default UserHeader;