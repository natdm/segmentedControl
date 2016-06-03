import React from 'react';
import { Platform } from 'react-native';
import SCAndroid from './android/segmentedControl';
import SCiOS from './ios/segmentedControl';

const Component = p =>
    Platform.OS == 'android' || p.override
        ? <SCAndroid {...p} />
        : <SCiOS {...p} />;

export default Component;