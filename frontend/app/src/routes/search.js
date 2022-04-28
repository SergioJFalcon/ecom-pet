import { useContext, useState, useEffect, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/category/product-card';

import { CategoriesContext } from '../contexts/categories.context';;


const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [text, setText] = useState(searchParams.get('search'));
  const { categoriesMap } = useContext(CategoriesContext);
  const [filteredList, setFilteredList] = useState([]);
  const [uuid, setUUID] = useState(searchParams.get('uuid'));

  useEffect(() => {
    /* 
        Map categories to combine each item into one list 

        We'll use this list to search through with the search param
    */
    
    let list_of_items = [];
    let some = Object.keys(categoriesMap).map((title) => {        
      return categoriesMap[title].map((item) => {
        return {
          ...item,
          title
        }
      })
    });
    console.log('some: ', some);
    some.forEach(item => {
        list_of_items = [...list_of_items, ...item];
    });

    console.log('list_of_items: ', list_of_items);
    let list = list_of_items.filter((item) => item.name.toLowerCase().includes(text))
    setFilteredList(list)
    setUUID(searchParams.get('uuid'));
    setText(searchParams.get('search'));
    if(text === ''){
      setFilteredList(list_of_items);
    }
    },[text, categoriesMap, searchParams, setSearchParams, uuid]);

  console.log('searchParams: ', searchParams);
  console.log('text: ', text);
  console.log('uuid: ', uuid);
  return (
    <Fragment>
      <h2 
        className='category-title'
        style={{ 
          fontSize: '38px',
          marginBottom: '25px',
          textAlign: 'center'
        }}
      >
        Search Page
      </h2>
      <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: '20px',
          rowGap: '50px',
        }}
      >
        {filteredList.length > 0 
            ? 
              filteredList.map((item) => (
                  <ProductCard key={item.id} product={item} title={item.title}/>
              )) 
            : 
              null
        }
      </div>
        {filteredList.length === 0 
            ? 
              <div style={{ width: '100%', textAlign: 'center', marginBottom: '5rem'}}>
                  <span>
                      No products match your search results. Please try again.
                  </span>
              </div> 
            : 
              null
        }
    </Fragment>
  );
};

export default Search;
