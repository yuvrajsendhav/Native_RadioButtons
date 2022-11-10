// 1 st Method 
// import React, {Component } from 'react';
// import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
// export default class Radiobuttons extends Component {
//   PROP = [
//     {
//       key: 'samsung',
//       text: 'Samsung',
//     },
//     {
//       key: 'apple',
//       text: 'Apple',
//     },
//     {
//       key: 'motorola',
//       text: 'Motorola',
//     },
//     {
//       key: 'lenovo',
//       text: 'Lenovo',
//     },
//   ];
//   state = {
//     value: null,
//   };
//   render() {
//     const {PROP} = this.props;
//     const {value} = this.state;
//     return (
//       <View>
//         {PROP.map(res => {
//           return (
//             <View key={res.key} style={styles.container}>
//               <Text style={styles.radioText}>{res.text}</Text>
//               <TouchableOpacity
//                 style={styles.radioCircle}
//                 onPress={() => {
//                   this.setState({
//                     value: res.key,
//                   });
//                 }}>
//                 {value === res.key && <View style={styles.selectedRb} />}
//               </TouchableOpacity>
//             </View>
//           );
//         })}
//         <Text> Selected: {this.state.value} </Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 35,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   radioText: {
//     marginRight: 35,
//     fontSize: 20,
//     color: '#000',
//     fontWeight: '700',
//   },
//   radioCircle: {
//     height: 30,
//     width: 30,
//     borderRadius: 100,
//     borderWidth: 2,
//     borderColor: '#3740ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedRb: {
//     width: 15,
//     height: 15,
//     borderRadius: 50,
//     backgroundColor: '#3740ff',
//   },
//   result: {
//     marginTop: 20,
//     color: 'white',
//     fontWeight: '600',
//     backgroundColor: '#F3FBFE',
//   },
// });





// 2 nd Method
import React, { useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
function RadioButtons() {
  const [mood, setMood] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}> How do you Feel ? </Text>

      <View style={styles.wraper}>
        {['happy', 'sad'].map(feeling => (
          <View key={feeling} style={styles.mood}>
            <Text style={styles.feeling}>{feeling} </Text>
            <TouchableOpacity
              style={styles.outer}
              onPress={() => setMood(feeling)}>
              {mood === feeling && <View style={styles.inner} />}
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Text style={{color:'#370db5'}}>{mood}</Text>
    </View>
  );
}
export default RadioButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  wraper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    borderRadius: 15,
  },
  mood: {
    marginHorizontal: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
  feeling: {
    fontSize: 22,
    textTransform: 'capitalize',
    color:'#370db5'
  },
  outer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inner: {
    width: 12,
    height: 12,
    backgroundColor: '#eb34b1',
    borderRadius: 10,
    
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#099e56',
  },
});
