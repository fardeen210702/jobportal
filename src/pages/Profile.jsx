import React, {useEffect, useState} from 'react'
import BuildProfile from '../components/BuildProfile'
import BuiltProfile from '../components/BuiltProfile';

function Profile(){
  const [list, setList] = useState(null)
  // const [list, setList] = useState(()=>{
  //   try {
  //     let storedData = localStorage.getItem('data');
  //     if (!storedData) {
  //       return null;
  //     } else {
  //       return JSON.parse(storedData);
  //     }
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error);
  //     return null;
  //   }
  //   })
    


  // useEffect(() => {
  //    localStorage.setItem('data', JSON.stringify(list))
  // }, [list])
  
  
  function handleSubmit(data){
    setList([data])
  }
  console.log(list,'list');

 return <div>
  {
    !list ?(

      <BuildProfile onSubmit = {handleSubmit}/>
    ):( <>
      {
        list.map((el,id)=>{
          return <BuiltProfile key={id} {...el}/>
        })
      }
    </>    
    )
  }

 
 </div>
}

export default Profile