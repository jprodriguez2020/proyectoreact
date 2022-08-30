const Error = ({ message }) => {
  return (
    <div className="text-center text-sm my-2 bg-themeRed font-semibold uppercase text-themeLight p-3 tracking-wider rounded-sm">
      {message}
    </div>
  );
};

export default Error;
