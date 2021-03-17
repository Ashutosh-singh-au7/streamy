import React from "react";
import {Field, reduxForm} from "redux-form";


class StreamFrom extends React.Component{

    // renderListen(formProps){
    //     return(
    //         <input onChange={formProps.input.onChange} value={formProps.input.value} />
    //     )
    // }

    renderError({error,touched}){
        if(touched && error){
            return(
                <div className="ui error message" >
                    <div className="header" >
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderListen=({input ,label, meta })=>{
        // console.log(meta);
        return(
            <div className="field" >
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                <div>{this.renderError(meta)}</div>    
            </div>
            
        )
    };

    onSubmit=(formValue)=>{
        this.props.onSubmit(formValue)
    };

    render(){
        return(
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}  >
                <Field name="title" component={this.renderListen} label="Enter Title"/>
                <Field name="description" component={this.renderListen} label="Enter Description"/>
                <button className="ui button primary" >Submit</button>        
            </form>
        )
    }
};

const validate = (formValues)=>{
    const errors = {};
    if(!formValues.title){
        errors.title = "you must enter a Title";
    }
    if(!formValues.description){
        errors.description = "you must enter a description";
    }
    return errors;
}

export default reduxForm({
    form:"streamForm",
    validate:validate
})(StreamFrom); 

