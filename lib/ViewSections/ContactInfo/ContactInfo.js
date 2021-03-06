import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import { Accordion } from '@folio/stripes-components/lib/Accordion';
import KeyValue from '@folio/stripes-components/lib/KeyValue';

import UserAddresses from '../../UserAddresses';
import contactTypes from '../../../data/contactTypes';

const ContactInfo = ({ expanded, onToggle, accordionId, user, addressTypes, addresses, stripes: { intl } }) => {
  const preferredContact = contactTypes.find(g => g.id === _.get(user, ['personal', 'preferredContactTypeId'], '')) || { type: '' };

  return (
    <Accordion
      open={expanded}
      id={accordionId}
      onToggle={onToggle}
      label={intl.formatMessage({ id: 'ui-users.contact.contactInformation' })}
    >
      <Row>
        <Col xs={3}>
          <KeyValue label={intl.formatMessage({ id: 'ui-users.contact.email' })} value={_.get(user, ['personal', 'email'], '')} />
        </Col>
        <Col xs={3}>
          <KeyValue label={intl.formatMessage({ id: 'ui-users.contact.phone' })} value={_.get(user, ['personal', 'phone'], '')} />
        </Col>
        <Col xs={3}>
          <KeyValue label={intl.formatMessage({ id: 'ui-users.contact.mobilePhone' })} value={_.get(user, ['personal', 'mobilePhone'], '')} />
        </Col>
        <Col xs={3}>
          <KeyValue label={intl.formatMessage({ id: 'ui-users.contact.preferredContact' })} value={preferredContact.desc ? intl.formatMessage({ id: preferredContact.desc }) : ''} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <UserAddresses addressTypes={addressTypes} addresses={addresses} intl={intl} />
        </Col>
      </Row>
      <br />
    </Accordion>
  );
};

ContactInfo.propTypes = {
  stripes: PropTypes.shape({
    intl: PropTypes.object.isRequired,
  }).isRequired,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
  accordionId: PropTypes.string.isRequired,
  user: PropTypes.object,
  addressTypes: PropTypes.arrayOf(PropTypes.object),
  addresses: PropTypes.arrayOf(PropTypes.object),
};

export default ContactInfo;
