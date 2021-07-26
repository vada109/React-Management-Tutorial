import React from 'react';

class Customer extends React.Component{
    render () {
        return (
            //props를 이용하여 전달받은 값을 출력할 수 있도록 한다.
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
