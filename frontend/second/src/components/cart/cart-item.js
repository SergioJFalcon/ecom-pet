const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div 
      className='cart-item-container'
      style={{
        width: '100%',
        display: 'flex',
        height: '80px',
        marginBottom: '15px'
      }}
    >
      <img 
        src={imageUrl} 
        alt={`${name}`}
        style={{
          width: '30%',
        }}
      />
      <div 
        className='item-details'
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '10px 20px',
        }}
      >
        <span 
          className='name'
          style={{
            fontSize: '16px',
          }}
        >
          {name}
        </span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
