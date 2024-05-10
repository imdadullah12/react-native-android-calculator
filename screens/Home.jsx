import { View, Text, StatusBar, TextInput, FlatList } from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableRipple } from 'react-native-paper';

const buttons = [
    {
        value: 'AC',
        bgColor: '#633f20',
    },
    {
        value: '()',
        bgColor: '#5a3f4a',
    },
    {
        value: '%',
        bgColor: '#5a3f4a',
    },
    {
        value: '/',
        bgColor: '#5a3f4a',
    },
    {
        value: '7',
        bgColor: '#27181d',
    },
    {
        value: '8',
        bgColor: '#27181d',
    },
    {
        value: '9',
        bgColor: '#27181d',
    },
    {
        value: 'X',
        bgColor: '#5a3f4a',
    },
    {
        value: '4',
        bgColor: '#27181d',
    },
    {
        value: '5',
        bgColor: '#27181d',
    },
    {
        value: '6',
        bgColor: '#27181d',
    },
    {
        value: '-',
        bgColor: '#5a3f4a',
    },
    {
        value: '1',
        bgColor: '#27181d',
    },
    {
        value: '2',
        bgColor: '#27181d',
    },
    {
        value: '3',
        bgColor: '#27181d',
    },
    {
        value: '+',
        bgColor: '#5a3f4a',
    },
    {
        value: '0',
        bgColor: '#27181d',
    },
    {
        value: '.',
        bgColor: '#27181d',
    },
    {
        value: 'B',
        bgColor: '#27181d',
    },
    {
        value: '=',
        bgColor: '#8d004f',
    },
];

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#1a1114' }}>
            <StatusBar backgroundColor={'#3b252a'} />
            <View style={styles.display}>
                <Icon name="dots-vertical" style={{ marginLeft: 'auto' }} size={25} color="#eacad2" />
                <TextInput editable={false} value="20" keyboardType="numeric" style={styles.input} />
            </View>
            <View style={styles.keyboard}>
                <FlatList
                    data={buttons}
                    numColumns={4}
                    columnWrapperStyle={{ gap: 10, marginBottom: 10 }}
                    renderItem={({ item }) => {
                        let element = null;
                        if (item.value == '+') {
                            element = <Icon name="plus" style={{ margin: 'auto', marginLeft: 10 }} size={55} color="#eacad2" />;
                        } else if (item.value == '()') {
                            element = <Icon name="code-parentheses" style={{ margin: 'auto' }} size={55} color="#eacad2" />;
                        } else if (item.value == '=') {
                            element = <Icon name="equal" style={{ margin: 'auto' }} size={55} color="#eacad2" />;
                        } else if (item.value == '-') {
                            element = <Icon name="minus" style={{ margin: 'auto' }} size={55} color="#eacad2" />;
                        } else if (item.value == 'X') {
                            element = <Icon name="window-close" style={{ margin: 'auto' }} size={55} color="#eacad2" />;
                        } else if (item.value == 'B') {
                            element = <Icon name="backspace" style={{ margin: 'auto', marginLeft: 20 }} size={30} color="#eacad2" />;
                        } else {
                            element = <Text style={styles.keyboardText}>{item.value}</Text>;
                        }
                        return (
                            <View style={[styles.button, { backgroundColor: item.bgColor }]}>
                                <TouchableRipple style={styles.ripple} onPress={() => { }}>
                                    {element}
                                </TouchableRipple>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.value}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 20, paddingHorizontal: 5, gap: 10 }}>
                    <Text style={{ textAlign: 'left' }}>Developed By: Pen Programmer</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableRipple>
                            <Icon name="cog" style={{ margin: 'auto', marginLeft: 20 }} size={30} color="#eacad2" />
                        </TouchableRipple>
                        <TouchableRipple>
                            <Icon name="history" style={{ margin: 'auto', marginLeft: 20 }} size={30} color="#eacad2" />
                        </TouchableRipple>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Home;
