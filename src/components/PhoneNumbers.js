import React, {PropTypes} from 'react';
import _ from 'lodash';
import phoneFormatter from 'phone-formatter';

const PhoneNumbers = ({value}) => (
  <div className='phone-numbers'>
    {(value || []).map((number, i) => (
      <PhoneNumber key={i} value={number} />
    ))}
  </div>
)

function PhoneNumber ({value}) {
  let title = _.get(value, 'title.value');
  let firstName = _.get(value, 'first-name-or-organization.value');
  let lastName = _.get(value, 'last-name.value');

  let name = _([title, firstName, lastName]).flatten().join(' ');
  let phone = phoneFormatter.format(new String(_.get(value, 'phone-number.value', '')), '(NNN) NNN-NNNN');

  return (
    <div className='phone-number-block'>
      {name && <div className='name'>{name}</div>}
      <div className='phone-number'>{phone}</div>
    </div>
  );
}

export default PhoneNumbers;
