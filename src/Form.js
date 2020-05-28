import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Form(props) {
    const [queryParams, setSearch] = useState('');

    return(
        <form
            autoComplete='off'
            noValidate
            onSubmit={
                event =>{
                    event.preventDefault();
                    props.searchHeros(queryParams)
                }
            }
        >
        <label id="label-search">Search your hero favorite</label>
        <input
            id='search'
            type='text'
            name='search'
            aria-labelledby='label-search'
            aria-describedby='Search your hero favorite'
            onChange={(event) => setSearch(event.target.value)}
            value={queryParams}
            //required={checkErrors && props.enableStickerOptions}
        />
        <button>Search</button>
        </form>
    )
}

export default Form