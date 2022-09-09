import { useState } from 'react';
import Error from '../components/Error';

const Contact = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ client: '', email: '', phone: '' });
  const { client, email, phone } = form;

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del Formulario
    if ([client, email, phone].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    alert('Message Sent');
    setForm({ client: '', email: '', phone: '' });
  };

  return (
    <div className="bg-themeOrange md:h-screen">
      <div className="flex flex-col justify-center items-center md:flex-row h-full ">
        <div className="mt-80 md:mt-0">
          <div className=" w-80 md:w-full md:space-y-10">
            <h1 className="p-5 text-xl md:text-3xl font-light tracking-widest">
              Need advice on the
            </h1>
            <span className="p-5 uppercase text-2xl md:text-4xl">
              selection of feed?
            </span>

            <p className="text-sm p-5 md:w-96">
              Fill in the form and we will help you choose the product over the
              phone
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-80 p-5"
          >
            {error && <Error message="All fields are requiered" />}
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-md text-sm outline-none"
              name="client"
              value={client}
              onChange={handleForm}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="p-3 rounded-md text-sm outline-none"
              name="email"
              value={email}
              onChange={handleForm}
            />
            <input
              type="number"
              placeholder="Phone number"
              className="p-3 rounded-md text-sm outline-none"
              name="phone"
              value={phone}
              onChange={handleForm}
            />
            <input
              type="submit"
              value="Ask For Advice"
              className="bg-themeCian text-themeDarkBrown rounded-md uppercase p-2 shadow-md font-medium cursor-pointer hover:bg-themeLight hover:text-themeOrange duration-500 ease-in-out"
            />
          </form>
        </div>
        <img src="./contact.png" width={350} height={350} alt="img" />
      </div>
    </div>
  );
};

export default Contact;
