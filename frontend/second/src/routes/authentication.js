import SignUpForm from "../components/SignUpForm";
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
      <SignUpForm />
    </div>
  );
};

export default Authentication;
