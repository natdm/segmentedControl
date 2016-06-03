# segmentedControl

#Works on Android and IOS in React Native

A wrapper for SegmentedControlIOS so all props work the same.
For Android all props work except disabled seems to require 
a re-render and momentary hasn't been programmed.

##PropTypes for Android (iOS are the same as React Native props for SegmentedControlIOS):
```javascript
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
};
```

![alt text](https://github.com/natdm/segmentedControl/blob/master/segmentedControl.gif "Segmented Control GIF Android")

##Example:
```javascript

class TestSegmentControl extends Component {
    constructor(p) {
        super(p);
        this.state = {
            selectedIndex: 0
            , values: [ "Component 1", "Component 2", "TEST HELLO" ]
            , value: null
        }
    }

    onChange(event) {
        this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
    }

    onValueChange(value) {
        this.setState({value})
    }

    render() {
        let text;

        switch(this.state.selectedIndex) {
            case 0 :
                text = "Hello case 0";
                break;
            case 1 :
                text = "Hello from 2";
                break;
            case 3:
                text = "AYOOO from 3";
                break;
            default:
                text = "This is awkward";

        }
        return (
            <View style={styles.container}>
                <SegmentedControl values={this.state.values}
                                  onChange={this.onChange.bind(this)}
                                  onValueChange={this.onValueChange.bind(this)}
                                  tintColor={'orange'}
                                  selectedIndex={this.state.selectedIndex}/>
                <Text style={styles.welcome}>
                    {text}
                </Text>
                <Text style={styles.instructions}>
                    {this.state.value}
                </Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
```