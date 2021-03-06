import SignInForm from "../components/SignInForm";

const Authentication = () => {
  return (
    <div 
      className="authentication-container" 
      style={{
        display: 'flex',
        width: '900px',
        justifyContent: 'space-between',
        margin: '30px auto'
      }}>
      <SignInForm />
    </div>
  );
};

export default Authentication;
