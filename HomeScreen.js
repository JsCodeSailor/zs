import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SwipeableFlatList,
    TouchableHighlight

} from 'react-native';

export default class MainPage extends Component {
    constructor(props){
        super(props);
         nameList = [
            {id:1,name:'易烊千玺'},
            {id:2,name:'王源'},
            {id:3,name:'王俊凯'},
            {id:4,name:'李倩倩'},
            {id:6,name:'潘思言'},
            {id:7,name:'铁罐'},
            {id:8,name:'王子'},
            {id:9,name:'王子予'},
            {id:10,name:'李安逸'},
            {id:11,name:'孙思文'},
            {id:12,name:'赵谏'}, 
            {id:13,name:'董子林'},
        ];
        this.state={
            nameList:nameList
        };
    }
    static navigationOptions = {
        tabBarLabel: '首页',
        headerStyle: {
            height: 0, //去掉标题
        },
    };
    render() {
        //const {data}=this.state;
        return(
            <View>
                <Text style={styles.txtPeople}>详细人员名单</Text>
                
        <SwipeableFlatList
          //1数据的获取和渲染
          data={nameList}
          renderItem={(data) => <View style={styles.item}>
            <Text style={styles.text}>{data.item.name}</Text>
          </View>}
          //2创建侧滑菜单
          renderQuickActions={() => this.getQuickActions()}//创建侧滑菜单
          maxSwipeDistance={80}//可展开（滑动）的距离
          bounceFirstRowOnMount={false}//进去的时候不展示侧滑效果
        />  
            </View>
        );
    }
    getQuickActions = () => {
        //const {currentlyOpenSwipeable} =this.state;
        return <View style={styles.quickAContent}>
          <TouchableHighlight
            onPress={this.delete}
          >
            <View style={styles.quick}>
              <Text style={styles.delete}>删除</Text>
            </View>
          </TouchableHighlight>
        </View>
      };
}
      
const styles = StyleSheet.create({
    txtPeople:{
        fontSize:20,
        color:'#51A7F9',
        textAlign:'center',
        marginTop:10
    },
    text: {
        color: '#444444',
        fontSize: 20,
      },
      //侧滑菜单的样式
      quickAContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 15,
        marginBottom: 10,
      },
      quick: {
        backgroundColor: "#ff1d49",
        flex: 1,
        alignItems: 'flex-end',//水平靠右
        justifyContent: 'center',//上下居中
        width: 100,
        borderRadius: 5,
        elevation: 5,//漂浮的效果
    
      },
      delete: {
        color: "#d8fffa",
        marginRight:40
      },
      item: {
        backgroundColor: '#87CEEB',
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,//漂浮的效果
        borderRadius:10,//圆角
      },
   
});