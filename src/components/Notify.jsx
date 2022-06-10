
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Notify(type, message) {
    return toast(message, {
        position:'top-center',
        type:type,
        autoClose:1000,
    })
}
