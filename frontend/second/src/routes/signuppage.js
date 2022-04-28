import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <div 
      className="authentication-container" 
      style={{
        display: 'flex',
        width: '900px',
        justifyContent: 'space-between',
        margin: '30px auto'
      }}>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
