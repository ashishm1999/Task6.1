import React from 'react'
import Question from './Question';
import Article from './Article';

function Type(props){

    function Greeting(type) {
        
        if (type === "Question") {
          return <Question />;
        }
        return <Article />;
      }


    return (

        Greeting(props.typeSelected)

    )
   
}
export default Type