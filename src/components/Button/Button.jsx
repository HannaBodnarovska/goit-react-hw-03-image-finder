const Button = ({ onClick, disabled }) => {
    return (
      <button onClick={onClick} className="button" disabled={disabled}>
        Load more
      </button>
    );
  };
  
  export default Button;