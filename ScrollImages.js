import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import timer from 'react-native-timer';

import Dimensions from 'Dimensions';
let screenWidth = Dimensions.get('window').width;

//
import * as ImageData from './image_data.json';

let Image_Files = {
    './imgs/scroll/img_01.jpg': require('./imgs/scroll/img_01.jpg'),
    './imgs/scroll/img_02.jpg': require('./imgs/scroll/img_02.jpg'),
    './imgs/scroll/img_03.jpg': require('./imgs/scroll/img_03.jpg'),
    './imgs/scroll/img_04.jpg': require('./imgs/scroll/img_04.jpg'),
    './imgs/scroll/img_05.jpg': require('./imgs/scroll/img_05.jpg'),
};

export default class ScrollImages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        }
    }

    componentDidMount() {
        // name, fun, interval
        timer.setTimeout(this, '', () => this.timerFunction(), this.props.duration);
    }

    componentWillUnmount() {
        timer.clearTimeout(this);
    }

    timerFunction() {
        let scrollView = this.refs.scrollView;
        let imgCount = ImageData.data.length;
        let newPage = (this.state.currentPage + 1) > imgCount ? 0 : (this.state.currentPage + 1);
        this.setState({
            currentPage: newPage
        });

        var offsetX = newPage * screenWidth;
        scrollView.scrollResponderScrollTo({ x: offsetX, y: 0, animated: true });
    }

    renderImages() {
        let images = ImageData.data.map((image, i) => {
            return (
                <Image key={i} source={Image_Files[image.icon]} style={styles.imageItem} />
            );
        });
        return images;
    }

    renderPagingIndicator() {
        return (
            <View style={styles.pagingIndicator}>
                <Text>
                    {this.renderCircles()}
                </Text>
            </View>
        );
    }

    renderCircles() {
        let circles = ImageData.data.map((image, i) => {
            let style = i == this.state.currentPage ? styles.activeCircle : styles.circle;
            return (
                <Text style={style} key={i}> &bull; </Text>
            );
        });
        return circles;
    }


    onScrollEnd(e) {
        // offset on horizontla
        var offsetX = e.nativeEvent.contentOffset.x;
        // current page
        var currentPage = Math.floor(offsetX / screenWidth);

        this.setState({
            currentPage
        });
    }

    onScollBeginDrag()
    {
        // Stop timer
    }

    onScrollEndDrag()
    {
        // restart timer
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref='scrollView' horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e) => this.onScrollEnd(e)}
                    onScrollBeginDrag={(e)=>this.onScollBeginDrag(e)}
                    onScrollEndDrag={(e)=>this.onScrollEndDrag(e)}>
                    {this.renderImages()}
                </ScrollView>
                {this.renderPagingIndicator()}
            </View>
        );
    }
}

ScrollImages.defaultProps = {
    duration: 1000
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#dddddd',
        // alignItems: 'center'  // all sub items align to center
    },

    imageItem: {
        width: screenWidth,
        height: 250,
    },

    pagingIndicator: {
        width: screenWidth,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',     // cover on scroll view
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',    // align on cross direction
    },

    circle: {
        fontSize: 25,
        color: 'white',
    },

    activeCircle: {
        fontSize: 25,
        color: 'orange',
    }
});