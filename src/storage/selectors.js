
export const selectorAll = (state) => {
    return {
        contacts: state.contacts.contacts.toSorted((a, b) => a.name.localeCompare(b.name)),
        isLoadingContacts: state.contacts.isLoading,
        errorContacts: state.contacts.error,
        isLoadingUser: state.user.isLoading,
        errorUser: state.user.error,
    };
};

export const selectorAuth = (state) => {
    return {
        token: state.user.token,
        isLogin: state.user.isLogin,
    };
};

export const selectorUser = (state) => {
    return {
        userName: state.user.userName,
        userEmail: state.user.userEmail,
    };
};
