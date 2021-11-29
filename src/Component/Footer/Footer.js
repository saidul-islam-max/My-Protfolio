import React from 'react';

const Footer = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
            </form>
        </div>
    );
};

export default Footer;