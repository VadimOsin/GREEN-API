import {instance} from "./host";

export const receiveNotification = async (user) => {
    const {data} = await instance.get(`waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`).then(
       // res => deleteNotification(user, res.data.receiptId)
    ).catch(
        error => {
            throw new Error(error.response.data.message);
        }
    );
    return data
};

export const deleteNotification = async (user, id) => {
    const {data} = await instance.get(`waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${id}`)
        .catch(
            error => {
                throw new Error(error.response.data.message);
            }
        );
    return data
};

export const sendMessage = async (user, body) => {
    const {data} = await instance.post(`waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}/`,body)
        .catch(
            error => {
                throw new Error(error.response.data.message);
            }
        );
    return data
};