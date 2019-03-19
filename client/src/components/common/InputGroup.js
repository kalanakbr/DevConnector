import React from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types'

const InputGroup = ({
    name,
    placeholder,
    value,
    error,
    icon,
    type,
    info,
    onChange,
}) => {
  return (
    <div className="input-group mb-3">
    <div className="div input-group-prepend">
        <span className="input-group-text">
            <i className={icon} />
        </span>    
    </div>
    <input
        className={classnames("form-control form-control-lg" ,{
        'is-invalid': error
      })} 
      placeholder={placeholder} 
      name={name}
      value={value}
      onChange={onChange}
      />
      {error &&  (<div className='invalid-feedback'>{error}</div>)}
  </div>
  );
};

InputGroup.propTypes ={
    name:Proptypes.string.isRequired,
    placeholder:Proptypes.string,
    value:Proptypes.string.isRequired,
    icon:Proptypes.string,
    error:Proptypes.string,
    type:Proptypes.string.isRequired,
    onChange:Proptypes.func.isRequired
}

InputGroup.defaultProps = {
    type:'text'
}

export default InputGroup;