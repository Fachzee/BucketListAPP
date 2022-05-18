import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
import deleteBucket from "../images/delete.png";
import addItem from "../images/add.png";

const CreateList = () =>  {
    const {user} = useContext(UserContext);

    console.log(localStorage.getItem('loginToken'));

    const [formFields, setFormFields] = useState([{ 
        userid: user.id,
        itemList:'', 
        itemCountry:'' 
        },
    ])
  
    const handleFormChange = (event, index) => {
      let dataForm = [...formFields];
      dataForm[index][event.target.name] = event.target.value;
      setFormFields(dataForm);
    }

    const addFields = () => {
        let object = {
          userid: user.id,
          itemList: '',
          itemCountry: ''
        }
    
        setFormFields([...formFields, object])
      }
    
    const removeFields = (index) => {
        let dataForm = [...formFields];
        dataForm.splice(index, 1)
        setFormFields(dataForm)
      }
  

    const submit = async(e) => {
        e.preventDefault();

        try {
          const response = await axios({
            method: "post",
            url: "http://localhost/php-auth-api/createlist.php",
            data: formFields,
            headers: { "Content-Type": "application/json" },
          });
        } catch(error) {
          console.log(error)
          console.log(formFields)
        }
      }
  
  
    return (
      <div className='createList'>
        <div className='header'>
            <div className="img">🧒🏻</div>
            <h3>Create your first bucketlist!</h3>
        </div>
        <form className="list" onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <input className="inputItem" name='itemList' type="text" id="itemList" placeholder='Item' onChange={event => handleFormChange(event, index)} value={form.itemList} required /> 
                <input className="inputCountry" name='itemCountry' type="text" id="Country" placeholder='Country' onChange={event => handleFormChange(event, index)} value={form.itemCountry} required/>
                <img src={deleteBucket} alt="" onClick={() => removeFields(index)} />
              </div>
            )
          })}
        </form>
        <div className='divremoveimg'>
            <img className="" src={addItem} onClick={addFields}></img>
        </div>
        <div className="divcreatebutton">
            <button className="buttoncreatebutton" onClick={submit}>Create Bucketlist!</button>
        </div>
      </div>
    );
  }
  

export default CreateList;