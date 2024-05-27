const ErrorPage: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex flex-col justify-center items-center">
    <h2>{message}</h2>
  </div>
);

export default ErrorPage;
