import React from "react";
import StreamForm from "./StreamForm";
import {connect} from "react-redux";
import {createStream} from "../../actions";


class StreamCreate extends React.Component{

    // renderListen(formProps){
    //     return(
    //         <input onChange={formProps.input.onChange} value={formProps.input.value} />
    //     )
    // }


    onSubmit=(formValue)=>{
        this.props.createStream(formValue)
    };

    render(){
        return(
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
};


export default connect(null,{createStream})(StreamCreate);