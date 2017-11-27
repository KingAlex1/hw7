import React from 'react' 
import './Person.css'

const Person = props => {
    const {image,name } = props.data ; 
    let medium = image.medium;
    return (
        <div className='person' >
            <h5 className ='person__name'>{name}</h5>
            <div className = 'person__poster'>
                <img src={medium} alt="" className='person__img'/>
            </div>
        </div>
    )

}

export default Person 