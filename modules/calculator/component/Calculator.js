import React, { Component, PureComponent } from 'react'
import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Text from './../../../commonComponent/TextWrapper'
import Header from './../../../commonComponent/Header'
import {px,formatMoney,px1,DesignHeight} from './../../../utils/CommonUtils'


export default class Calculator extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      money: null,
      time: null,
      rate: null,
      errText: '',
      showErr1:false,
      showErr2:false,
      showErr3:false,
      totalReturn: 0,//总回报
      returnMoney: 0, //利息
      totalRate: 0 //复合收益率
    }
  }

  computeMoney = (money, time, rate) => {
    let newRate = rate ? rate / 100 : 0
    money = money || 0
    time = time || 0
    let totalReturn = money * Math.pow(1 + newRate, time || 1) * 10000
    let returnMoney = totalReturn - money * 10000
    let totalRate = (returnMoney / money) / 100 || 0

    this.setState({
      money: money,
      time: time,
      rate: rate,
      // totalReturn: Math.round(totalReturn * 100) / 100,
      // returnMoney: Math.round(returnMoney * 100) / 100,
      // totalRate: Math.round(totalRate * 100) / 100,
      totalReturn: totalReturn,
      returnMoney: returnMoney,
      totalRate: Math.round(totalRate * 100) / 100,
      errText: '',
      showErr1:false,
      showErr2:false,
      showErr3:false,
    })
  }

  onChangeText1 = (text) => {
    if (text) {
      this.computeMoney(text, this.state.time, this.state.rate)
    } else {
      this.setState({
        money: null,
        totalReturn: 0,
        returnMoney: 0,
        totalRate: 0,
        showErr1:true,
        errText: '请输入投资金额'
      })
    }
  }

  onChangeText2 = (text) => {
    if (text) {
      this.computeMoney(this.state.money, text, this.state.rate)
    } else {
      this.setState({
        time: null,
        totalReturn: 0,
        returnMoney: 0,
        totalRate: 0,
        showErr2:true,
        errText: '请输入投资期限'
      })
    }
  }

  onChangeText3 = (text) => {
    if (text) {
      this.computeMoney(this.state.money, this.state.time, text)
    } else {
      this.setState({
        rate: null,
        totalReturn: 0,
        returnMoney: 0,
        totalRate: 0,
        showErr3:true,
        errText: '请输入收益率'
      })
    }
  }

  hideKeyboard = () => {
    Keyboard.dismiss();
  };

  render () {
    let showErr1 = this.state.showErr1;
    let showErr2 = this.state.showErr2;
    let showErr3 = this.state.showErr3;

    return (
      <TouchableOpacity style={styles.container} onPress={this.hideKeyboard} activeOpacity={1}>
        <Header title={'复利计算器'}/>

        <SafeAreaView style={styles.SafeAreaView}>
            <View style={[styles.inputBox,{borderBottomColor:showErr1?'red':'#ccc'}]}>
              <Text style={styles.label}>
                投资金额
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={this.onChangeText1}
                value={this.state.money ? String(this.state.money) : ''}
                keyboardType={'numeric'}
                autoFocus={true}
                maxLength={12}
                clearButtonMode={true}
              />
              <Text style={styles.labelEnd}>
                万元
              </Text>
            </View>

            <View style={[styles.inputBox,{borderBottomColor:showErr2?'red':'#ccc'}]}>
              <Text style={styles.label}>
                投资期限
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={this.onChangeText2}
                value={this.state.time ? String(this.state.time) : ''}
                keyboardType={'numeric'}
                autoFocus={true}
                maxLength={2}
                clearButtonMode={true}
              />
              <Text style={styles.labelEnd}>
                年
              </Text>
            </View>

            <View style={[styles.inputBox,{borderBottomColor:showErr3?'red':'#ccc'}]}>
              <Text style={styles.label}>
                收益率
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={this.onChangeText3}
                value={this.state.rate ? String(this.state.rate) : ''}
                keyboardType={'numeric'}
                autoFocus={true}
                maxLength={10}
                clearButtonMode={true}
              />
              <Text style={styles.labelEnd}>
                % / 年
              </Text>
            </View>

            {/*<Text style={styles.errText}>{this.state.errText || ' '}</Text>*/}


            <View style={styles.resultBox}>

              <Text style={styles.resultTitle}>结果：</Text>

              <View style={styles.resultTextBox}>
                <Text style={styles.resultLabel}>
                  - 回款总额
                </Text>

                <Text style={styles.resultNum}>
                  {formatMoney(this.state.totalReturn) || 0}
                </Text>

                <Text style={styles.resultLabelEnd}>
                  元
                </Text>

              </View>

              <View style={styles.resultTextBox}>
                <Text style={styles.resultLabel}>
                  - 总利息
                </Text>

                <Text style={styles.resultNum}>
                  {formatMoney(this.state.returnMoney)}
                </Text>
                <Text style={styles.resultLabelEnd}>
                  元
                </Text>
              </View>


              <View style={styles.resultTextBox}>

                <Text style={styles.resultLabel}>
                  - 复合收益率
                </Text>

                <Text style={styles.resultNum}>
                  {this.state.totalRate + ' %'}
                </Text>
              </View>


            </View>


        </SafeAreaView>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    height:DesignHeight
  },
  SafeAreaView:{
    paddingTop:px(100)
  },
  errText: {
    height:px(15),
    fontSize: px(13),
    color: '#fe0000',
    width: '100%',
    textAlign: 'left',
    paddingLeft: px(15)
  },
  inputBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: px1,
    borderBottomColor: '#ccc',
    //justifyContent: 'flex-start',
    height: px(50),
    paddingHorizontal: '25%',
    marginBottom: px(5),
  },
  label: {
    position:'absolute',
    left:0,
    alignItems: 'center',
    color: '#666',
    fontSize: px(15),
    paddingLeft:px(15),
    zIndex:0
  },
  labelEnd: {
    position:'absolute',
    right:0,
    fontSize: px(15),
    textAlign: 'right',
    color: '#666',
    paddingRight:px(15),
    zIndex:0
  },
  textInput: {
    width: '100%',
    height: px(50),
    fontSize: px(20),
    textAlign: 'center',
  },
  resultBox: {
    width: '100%',
    marginTop: px(30),
    flexDirection: 'column',
    paddingHorizontal: px(15),
  },
  resultTitle: {
    fontSize: px(15),
    color: '#666',
    fontWeight: '500',
    marginBottom: px(15)
  },
  resultTextBox: {
    width: '100%',
    marginBottom: px(10),
    flexDirection: 'row',
    height: px(20),
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor:'#fffcc4'
  },
  resultLabel: {
    //width:90,
    fontSize: px(15),
    color: '#666'
  },
  resultLabelEnd: {
    //marginLeft:10,
    fontSize: px(15),
    color: '#666'
  },
  resultNum: {
    color: 'red',
    fontSize: px(18),
    marginHorizontal: px(3)
  },
})
