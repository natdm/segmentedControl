import React, { Component } from 'react';
import {
    Text
    , View
    , StyleSheet
    , TouchableWithoutFeedback
    , Dimensions
} from 'react-native';

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
                                    ? 'black'
                                    : 'grey'
                                }]}>{v}</Text>
                        </View>
                    </TouchableWithoutFeedback>)}
            </View>
        )
    }
}

SegmentedControl.propTypes = {
    values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    , tintColor: React.PropTypes.string
    , enabled: React.PropTypes.bool
    , onChange: React.PropTypes.func
    , onValueChange: React.PropTypes.func
    , androidTint: React.PropTypes.string   //Android Specific
    , height: React.PropTypes.number        //Android Specific
};

SegmentedControl.defaultProps = {
    height: 38
    , enabled: true
    , tintColor: 'black'
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