import { toast } from 'react-toastify';

function onError(err: Error, message?: string) {
    if (message){
        toast.error(message);
        return;
    }

    if (err.message) {
        toast.error(err.message);
    }
}

export { onError } 