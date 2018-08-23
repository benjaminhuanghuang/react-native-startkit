/*
    API url : https://api.douban.com/v2/movie/in_theaters?count=20
*/
import React, { Component } from 'react';
import {
    Image,
    TextInput,
    StyleSheet,
    Text,
    View,
    ListView,
    SafeAreaView,
    ScrollView
} from 'react-native';

import Dimensions from 'Dimensions';
let screenWidth = Dimensions.get('window').width;


export default class ListyViewMovie extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1 !== r2;
            }
        });
        this.state = {
            dataSource: ds,
            loaded: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetch("https://api.douban.com/v2/movie/in_theaters").then((response) => response.json()).then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
                loaded: true
            });
        }).done();
    };

    render() {
        return (
            <View style={styles.container}>
                <ListView automaticallyAdjustContentInsets={false} //此选项可以修复掉会自动多出来的大约 10px 的空行  
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow} />
            </View>
        );
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <ScrollView>
                <View style={styles.row}>
                    <Image style={styles.thumb}
                        source={{
                            uri: rowData.images.large
                        }} />
                    <View style={styles.texts}>
                        <Text style={styles.textTitle}>
                            {rowData.title}
                        </Text>
                        <Text style={styles.textTitle}>
                            年份: {rowData.year}
                        </Text>
                        <Text style={styles.textTitle}>
                            豆瓣评分: {rowData.rating.average}
                        </Text>
                    </View>
                </View>
                <View style={styles.separator} />
            </ScrollView>
        );
    };
}


var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        padding: 10
    },
    separator: {
        height: 1,
        backgroundColor: '#EEEEEE'
    },
    thumb: {
        width: 60,
        height: 80,
        borderRadius: 2
    },
    textTitle: {
        flex: 1,
        textAlign: "left",
        paddingLeft: 10,
        fontWeight: "bold",
        flexDirection: 'row',
        color: "#666666"
    },
    texts: {
        flexDirection: 'column',
        paddingTop: 5
    }
});