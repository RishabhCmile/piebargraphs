import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  AreaChart,
  Grid,
  BarChart,
  ProgressCircle,
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
const App: () => React$Node = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const fill = 'rgb(134, 65, 244)';
  const BarChartdata = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    45,
    85,
    100,
    0,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <AreaChart
          style={{height: 200, margin: 30}}
          data={data}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill: '#ff6600'}}>
          <Grid />
        </AreaChart>
        <BarChart
          style={{height: 200, margin: 30}}
          data={BarChartdata}
          svg={{fill: '#e6e600'}}
          contentInset={{top: 30, bottom: 30}}>
          <Grid />
        </BarChart>
        <ProgressCircle
          style={{height: 150,margin: 30}}
          progress={0.7}
          progressColor={'#0099ff'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
  },
});

export default App;
