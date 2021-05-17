/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HomeView from './home.view';
import {getToken} from '@redux/login/selectors';
import {getListNotification} from '@redux/notification/selectors';
import {loginRequest} from '@redux/login/actions';
import {getNotificationRequest} from '@redux/notification/actions';

const Home = (props, {navigation}) => {
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
    if (props.token !== null) {
      //navigate sang notification
      props.getNotificationRequest();
      // console.log(props.getNotificationRequest());
    }
  }, [props.token]);

  useEffect(() => {
    if (props.listNotification) {
      setListNotification(props.listNotification);
      getList();
    }
  }, [props.listNotification]);

  // console.log(listNotification);
  const onPressLogin = payload => {
    props.loginRequest(payload); //payload là username, password bên view.
  };
  // console.log(listNotification);

  const getList = () => {
    props.navigation.navigate({name: 'ListNotification'});
    console.log(props);

    // console.log(navigation);
    // console.log(props.listNotification);
    // return <ListNotifications data={listNotification} />;
  };
  return <HomeView listNotification={[]} onPressLogin={onPressLogin} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
