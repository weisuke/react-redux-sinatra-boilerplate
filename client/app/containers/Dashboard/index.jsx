import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../actions/dashboard-actions';
import SearchPanel from '../../components/SearchPanel';
import ModalButton from '../../components/ModalButton';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import 'whatwg-fetch'

import "./style.scss"

class Dashboard extends Component {

    onSearchChange(query) {
        let {history, location} = this.props
        history.pushState(null, location.pathname, query)
    }

    render() {
        console.log('render called');
        let popover = <Popover title="popover">very popover. such engagement</Popover>;
        let tooltip = <Tooltip>wow.</Tooltip>;
        let { toggleModal } = this.props
        return (
            <div className='dashboard container'>

                <ModalButton {...this.props.modalButton} onToggle={this.props.toggleModal}>
                    <h4>Text in a modal</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                    <h4>Popover in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                    <h4>Tooltips in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                    <hr />

                    <h4>Overflowing text to show scroll behavior</h4>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </ModalButton>

                <SearchPanel onChange={this.onSearchChange.bind(this)} onSubmit={this.props.submitSearch} {...this.props.searchPanel}/>

            </div>
        )
    }
};

function select(state, props) {
    state.searchPanel.query = props.location.query.q || "";
    return state
}

export default connect(select, actions)(Dashboard)