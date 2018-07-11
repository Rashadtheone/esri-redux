import { toggleLocateModal, searchLocation } from 'js/actions/mapActions';
import Wrapper from 'js/components/modals/Wrapper';
import React, { Component } from 'react';
import appStore from 'js/appStore';

export default class LocateModal extends Component {
  displayName: 'LocateModal';

  close = () => {
    appStore.dispatch(toggleLocateModal({ visible: false }));
  };
  search = () => {
    appStore.dispatch(searchLocation({search: ''}));
  };

  render () {
    let { visible } = this.props;

    return (
      <Wrapper theme='locate-modal' visible={visible} close={this.close}>
        <input type="text" name="name" value=""/>
      </Wrapper>
    );
  }
}
