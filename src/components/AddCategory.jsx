import { useState} from 'react';


export const AddCategory = ({ onNewCategory }) => {



  const [ inputValue, setInputValue ] = useState('');

  const onChange = e => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length<=1 ) return;
    //Como enviar datos a un state con arrreglo desde otro componente
    // setCategories((categories) => [ inputValue, ...categories ]);
    setInputValue('')
    onNewCategory( inputValue.trim() );       
  }
  return (

    <form onSubmit={handleSubmit}>

        <input 
          type='text'
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onChange}

        />
    </form>
    
  )
}

