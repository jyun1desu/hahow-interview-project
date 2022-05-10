import {
    ToastContainer as ToasitifyToastContainer,
    toast as toasitifyToast
} from "react-toastify";
import SuccessIcon from 'assets/icon/success.png';
import ErrorIcon from 'assets/icon/error.png';
import { styled } from "stitches.config";

export enum ToastType {
    success = 'success',
    error = 'error'
}

type toastProps = {
    type: ToastType;
    message: string;
}

const CustomToast = styled('div', {
    display: 'flex',
    alignItems: 'center',

    '& > img': {
        width: '24px',
        height: '24px',
        marginRight: '12px',
    }
})
const Toast = ({ type, message }: toastProps) => {
    const getIcon = () => {
        const lookup = {
            [ToastType.success]: SuccessIcon,
            [ToastType.error]: ErrorIcon,
        }

        return lookup[type]
    }

    return (<CustomToast>
        <img src={getIcon()} alt={type} />
        <span>{message}</span>
    </CustomToast>)
};

export const toast = {
    success: (message: string) => {
        toasitifyToast(<Toast type={ToastType.success} message={message} />)
    },
    error: (message: string) => {
        toasitifyToast(<Toast type={ToastType.error} message={message} />)
    }
};

export const ToastContainer = () => (
    <ToasitifyToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
    />
);