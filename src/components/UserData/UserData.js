import React from 'react';
import { withRouter } from 'react-router-dom';

const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item"
      	key={label.toString()}>
         <span className="term">{label}: </span>
         <span>{item[field]}</span>
      </li>
    )
};

export {
  Record 
 }

const UserData = (props) => {
   const {getUserData, children: renderLabel} = props;
   const item = getUserData();
   console.log(item);

  const Edit = () => {
      props.history.push('/vacancy')
   }

  const Send = () => {
      alert("You have successfully sent data")
   }
   return (
    <section className="container vertical-central bg-light p-5">
        <h2> Check your informatiom </h2>
      	<div className="item-details card">
  	        <ul className="list-group list-group-flush">
  	            {
  	               React.Children.map(renderLabel, (child) => { 
  	                 return React.cloneElement(child, { item });
  	             })
  	            }
  	        </ul>
      	</div> 
        <p className="m-3">Click send if everithing correct. Click edit if you see error.</p>
        <div className="wrapper-central flex-row">
        <button  className="btn btn-primary mr-5"
            onClick = {Edit}> 
              Edit 
        </button>
        <button  className="btn btn-primary ml-5"
            onClick = {Send}> 
              Send 
        </button>
        </div>
      </section>
  );
}

export default withRouter(UserData);