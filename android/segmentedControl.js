import React, { Component } from 'react';
import {
    Text
    , View
    , StyleSheet
    , TouchableWithoutFeedback
    , Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

class SegmentedControl extends Component {

    width() {
        const window = Dimensions.get("window")
            , {width} = window
            , valueCount = this.props.values.length;

        return width / valueCount;
    }


    onPress(selectedSegmentIndex) {
        this.props.enabled && this.props.onChange
            ? this.props.onChange({ nativeEvent: { selectedSegmentIndex } })
            : null;
    }

    onValueChange(value) {
        this.props.enabled && this.props.onValueChange
            ? this.props.onValueChange(value)
            : null;
    }

    render() {
        const p = this.props
            , width = { width: this.width() }
            , height = { height: p.height }

            , borderBottomColor = p.androidTint
            ? p.androidTint
            : p.tintColor

            , unselected = p.enabled
            ? styles.unSelected
            : styles.unSelectedDisabled

            , selectedBorderColor = { borderBottomColor };

        return (
            <View style={[styles.container, p.style]}>
                {p.values.map((v, i) =>
                    <TouchableWithoutFeedback key={i} onPress={() => {this.onPress(i); this.onValueChange(v)}}>
                        <View style={[
                        styles.value
                        , width
                        , height
                        , p.selectedIndex == i
                            ? selectedBorderColor
                            : unselected
                        ]}>
                            <Text
                                style={[styles.textValue, {
                                color: p.selectedIndex == i
                                    ? this.props.androidTextActive
                                    : this.props.androidTextColor
                                }]}>{v}</Text>
                        </View>
                    </TouchableWithoutFeedback>)}
            </View>
        )
    }
}

SegmentedControl.PropTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired
    , tintColor: PropTypes.string
    , enabled: PropTypes.bool
    , onChange: PropTypes.func
    , onValueChange: PropTypes.func
    , androidTint: PropTypes.string   //Android Specific
    , height: PropTypes.number        //Android Specific
    , androidTextActive: PropTypes.string //Android Specific
    , androidTextColor: PropTypes.string //Android Specific
};

SegmentedControl.defaultProps = {
    height: 38
    , enabled: true
    , tintColor: 'black'
    , androidTextActive: 'black'
    , androidTextColor: 'grey'
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
        , alignItems: 'center'
        , justifyContent: 'center'
    }
    , value: {
        borderBottomWidth: 5
        , alignItems: 'center'
        , justifyContent: 'center'
    }
    , textValue: {
        textAlign: 'center'
    }
    , unSelected: {
        borderBottomColor: 'rgba(0,0,0,0)'
    }
    , unSelectedDisabled: {
        borderBottomColor: 'rgba(0,0,0,0)'
    }
});

export default SegmentedControl;
