import React from 'react';
import {Platform} from 'react-native';
import SCAndroid from './segmentedControl.android';
import SCiOS from './segmentedControl.ios';

const Component = p =>
    Platform.OS == 'android'
        ? <SCAndroid {...p} />
        : <SCiOS {...p} />;

export default Component;