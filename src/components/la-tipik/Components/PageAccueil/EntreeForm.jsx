import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const EntreeForm = (props) => {
    return ( 
       <div>
           <FormGroup>
          <Label for="exampleEmail">{props.label}</Label>
          <Input className={props.classStyle} type={props.email} placeholder={props.placeholder} />
        </FormGroup>
       </div> 
     );
}
 
export default EntreeForm;