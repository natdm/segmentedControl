# segmentedControl

#Works on Android and IOS in React Native

A wrapper for SegmentedControlIOS so all props work the same.
For Android all props work except disabled seems to require 
a re-render and momentary hasn't been programmed.

##PropTypes and Default Prop Types for Android 
####JUST Android. iOS is unaffected.
```javascript
SegmentedControl.propTypes = {
    values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    , tintColor: React.PropTypes.string
    , enabled: React.PropTypes.bool
    , onChange: React.PropTypes.func
    , onValueChange: React.PropTypes.func
    , androidTint: React.PropTypes.string   //Android Specific, overrides tintColor
    , height: React.PropTypes.number        //Android Specific
};

SegmentedControl.defaultProps = {
    height: 38
    , enabled: true
    , tintColor: 'black' 
};
```

![alt text](https://github.com/natdm/segmentedControl/blob/master/img/segmentedControl.gif "Segmented Control GIF Android")

##Example:
```javascript

class TestSegmentControl extends Component {
    constructor(p) {
        super(p);
        this.state = {
            selectedIndex: 0
            , values: [ "Dogs", "Cats", "Birds" ]
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
                text = "Woof";
                break;
            case 1 :
                text = "Meow";
                break;
            case 3:
                text = "Tweet";
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
                                  androidTint={'red'} //overrides tintColor in Android so Android is red and iOS is orange
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
        flex: 1
        , marginTop: 20
        , backgroundColor: '#F5FCFF'
    }
    , welcome: {
        fontSize: 20
        , textAlign: 'center'
        , margin: 10
    }
    , instructions: {
        textAlign: 'center'
        , color: '#333333'
        , marginBottom: 5
    }
});
```