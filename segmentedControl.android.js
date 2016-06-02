import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

class SegmentedControl extends Component {
    constructor(p) {
        super(p);
        this.enabled = typeof this.props.enabled != 'undefined'
            ? this.props.enabled
            : true;
    }

    width() {
        const window = Dimensions.get("window");
        const {width} = window;
        const valueCount = this.props.values.length;
        return width / valueCount;
    }


    onPress(selectedSegmentIndex) {
        this.props.onChange && this.enabled
            ? this.props.onChange({ nativeEvent: { selectedSegmentIndex } })
            : null;
    }

    onValueChange(value) {
        this.props.onValueChange && this.enabled
            ? this.props.onValueChange(value)
            : null;
    }

    render() {
        const p = this.props;
        const width = { width: this.width() };
        const selectedBorderColor = { borderBottomColor: p.tintColor };
        const unselected = this.enabled ? styles.unSelected : styles.unSelectedDisabled;

        return (
            <View style={styles.container}>
                {p.values.map((v, i) =>
                    <TouchableWithoutFeedback key={i} onPress={() => {this.onPress(i); this.onValueChange(v)}}>
                        <View style={[styles.value, width, p.selectedIndex == i ? selectedBorderColor : unselected]}>
                            <Text
                                style={[styles.textValue, { color: p.selectedIndex == i ? 'black' : 'grey'}]}>{v}</Text>
                        </View>
                    </TouchableWithoutFeedback>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
        , alignItems: 'center'
        , justifyContent: 'center'
    }
    , value: {
        borderBottomWidth: 5
        , height: 35
        , alignItems: 'center'
        , justifyContent: 'center'
    }
    , textValue: {
        textAlign: 'center'
    }
    , unSelected: {
        borderBottomColor: 'black'
    }
    , unSelectedDisabled: {
        borderBottomColor: 'grey'
    }
});

export default SegmentedControl;