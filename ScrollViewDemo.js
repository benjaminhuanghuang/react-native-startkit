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
let width = Dimensions.get('window').width;


export default class ScrollViewDemo extends Component {

    rendPress() {
        console.log('Mouse click');
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
                <View key={i} style={{backgroundColor:c}}>
                    <Text>
                        {c}
                    </Text>
                </View>
            );
        });
        return chidren;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:10,
        backgroundColor: '#dddddd',
        // alignItems: 'center'  // all sub items align to center
    },
});