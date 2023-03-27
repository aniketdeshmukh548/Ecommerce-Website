import {useCallback, useState } from "react";
import Contact from "../../Pages/ContactUs"


const ContactUserdata=(props)=>{
    const [error,setError]=useState(null)

    const userdataHandler=useCallback(async (user)=>{
        try {
            const response = await fetch('https://react-ecommerce-b1f5c-default-rtdb.firebaseio.com/contact.json', {
              method: 'POST',
              body: JSON.stringify(user),
              headers: {
                'Content-type': 'application/json'
              }
            });
            const data = await response.json();
            console.log('Data Added =',data);
            }
            catch (error) {
              setError(error.message);
            }
          },[])
        return (
            <div>
                <Contact onAdduser={userdataHandler} />
              {error && (
                  <h2 className="p-2 mt-2 mb-2 text-center">
                    {error}
                  </h2>
                )}
            </div>
          )

}

export default ContactUserdata;