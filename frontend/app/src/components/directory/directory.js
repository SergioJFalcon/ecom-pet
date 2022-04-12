import DirectoryItem from './directory-item';

const Directory = ({ categories }) => {
  return (
    <div 
      className='directory-container' 
      style={{
        width: '100%', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
      }}
    >
      {categories.map((category) => (  
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
