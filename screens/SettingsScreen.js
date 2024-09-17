import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(false);

  const toggleSwitch = () => setIsNotificationEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cài đặt thông báo</Text>
      <View style={styles.setting}>
        <Text>Bật thông báo</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isNotificationEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
