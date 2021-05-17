/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getToken} from '@redux/login/selectors';
import {getListNotification} from '@redux/notification/selectors';
import {loginRequest} from '@redux/login/actions';
import {getNotificationRequest} from '@redux/notification/actions';
import ListView from './listNotification.view';

const ListNotification = (props, {navigation}) => {
  const [listNotification, setListNotification] = useState([]);

  useEffect(() => {
    // Back event
    const handleBackPress = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    console.log(props.listNotification);
    if (props.token !== null) {
      //navigate sang notification
      props.getNotificationRequest();
      // console.log(props.getNotificationRequest());
    }
  }, [props.token]);

  useEffect(() => {
    console.log(props.listNotification);
    setListNotification(props.listNotification);
  }, [props.listNotification]);

  return <ListView data={props.listNotification} />;
};

const mapStateToProps = state => ({
  token: getToken(state),
  listNotification: getListNotification(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginRequest,
      getNotificationRequest,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ListNotification);
