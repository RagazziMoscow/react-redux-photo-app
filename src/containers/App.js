import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/pageActions';

class App extends Component {
    render() {
        const {user, page} = this.props;
        const {getPhotos} = this.props.pageActions;

        return (
            <div className='row'>
                <User name={user.name} />
                <Page year={page.year} photos={page.photos} getPhotos={getPhotos} loading={page.loading}/>
            </div>
        );
    }
}

function mapStateToProps (state) {

  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps (dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
