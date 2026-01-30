import { View, Text, Button } from "react-native";
import { removeToken } from "../../shared/storage/authStorage";

export function HomeScreen({ navigation }: any) {
  const logout = async () => {
    await removeToken();
    navigation.replace("Auth");
  };

  return (
    <View>
      <Text>Bienvenido a Licorería Guayabal</Text>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
}
