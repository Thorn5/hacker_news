import React from 'react';
 const ButtonPagination = ({pages , setPages}) => {
    return (
        <>
         <div class="ui buttons">
           <button class="ui labeled icon button" 
              onClick={() => setPages(pages-1)}
              disabled={pages===1}>
             <i class="left chevron icon"></i>
              Back
           </button>
  
           <button class="ui right labeled icon button"
                
                onClick={() => setPages(pages+1)}>
                Forward
               <i class="right chevron icon"></i>
            </button>
          </div>  
        </>
    )
 }

 export default ButtonPagination;