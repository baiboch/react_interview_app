import React, {useState} from 'react';

const useForm = (callback: any) => {
    const [values, setValues] = useState({});
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(values);
    };
    return {
        onChange,
        onSubmit,
        values,
    };
}
export default useForm;
