import React from "react";
import { Typography } from "@mui/material";
import { Triangle } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { Container } from "./PhoneNook.styled";
import Form from "../../component/Form/Form";
import Search from "../../component/Search/Search";
import ContactList from "../../component/List/ContactList";
import { addContact, deleteContact, fetchAboutUser, getContacts, setDefaultToken } from "../../storage/Thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectorAll, selectorAuth } from "../../storage/selectors";
import { useEffect } from "react";
import { useState } from "react";
import UserHeader from "../../component/UserHeader/UserHeader";
import Modal from "../../component/Modal/Modal";
import UserInfoModal from "../../component/AboutUser/AboutUser";


const PhoneBook = () => {
    const { contacts, isLoadingContacts: isLoading } =
        useSelector(selectorAll);
    const [filter, setFilter] = useState('');
    const [isopenModalUserAbout, setIsopenModalUserAbout] = useState(false)
    const dispatch = useDispatch();
    const { token } = useSelector(selectorAuth)
    const handleFilter = ({ currentTarget: { value } }) => {
        setFilter(value);
    };

    const getFilterContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    useEffect(() => {
        setDefaultToken(token)
        try {
            dispatch(fetchAboutUser())
            dispatch(getContacts())
        } catch (error) {
            setDefaultToken('')
        }
    }, [dispatch, token]);

    const handleContactRemove = ({ currentTarget: { id } }) => {
        dispatch(deleteContact(id));
    };

    const notify = () =>
        toast.info("A contact with the same name already exists in the Phonebook", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    const handleSubmitForm = (formData) => {
        const findErr = contacts.find(
            (contact) =>
                contact.name.toLowerCase() === formData.get("name").toLowerCase()
        );
        if (findErr) {
            notify();
            return;
        }
        dispatch(
            addContact({ name: formData.get("name"), number: formData.get("phoneNumber") })
        );
    };
    const hendleOpen = async () => {
        // const dataAboutUser = await dispatch(fetchAboutUser()).unwrap().then(res => res);
        // setDataAboutUser(dataAboutUser)
        setIsopenModalUserAbout(true)
    }
    const hendleClose = () => {
        setIsopenModalUserAbout(false)

    }
    return (
        <Container>
            <UserHeader hendleOpen={hendleOpen} />
            {isopenModalUserAbout && <Modal hendleClose={hendleClose}><UserInfoModal hendleClose={hendleClose} /></Modal>}
            <Typography sx={{ fontSize: "clamp(4rem, 6rem, 100%)" }} variant="h1">
                Phonebook
            </Typography>
            <Form onSubmit={handleSubmitForm} />
            <Typography
                sx={{ marginBottom: "0.2rem", fontSize: "clamp(3rem, 5rem, 100%)" }}
                variant="h2"
            >
                Contacts
            </Typography>
            <Search handleFilter={handleFilter} filter={filter} />
            {isLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        height: "100vh",
                    }}
                >
                    <Triangle
                        height="80"
                        width="80"
                        color="#1976d2"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </div>
            ) : null}
            <ToastContainer />
            <ContactList
                contacts={getFilterContacts()}
                handleContactRemove={handleContactRemove}
            />
        </Container>
    );
};

export default PhoneBook;

