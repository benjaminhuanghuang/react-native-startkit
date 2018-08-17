import React, { Component } from 'react';
import {
    Image,
    TextInput,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import Dimensions from 'Dimensions';
let screenWidth = Dimensions.get('window').width;


export default class ScrollViewDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {
       
    }

    render() {
        return (
            <ScrollView style={styles.container} >
                {this.renderChildrenView()}
            </ScrollView>
        );
    }

    renderChildrenView() {
        let colors = ['red', 'green', 'blud', 'yellow', 'purple'];
        let chidren = colors.map((c, i) => {
            return (
                <View key={i} style={{backgroundColor:c, height:100}}>
                    <Text>
                        {c}
                    </Text>
                </View>
            );
        });
        return chidren;
    }

}

ScrollImages.defaultProps = {
    duration: 1000
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:10,
        backgroundColor: '#dddddd',
        // alignItems: 'center'  // all sub items align to center
    },
});