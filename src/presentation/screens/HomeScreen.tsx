import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { removeToken } from "../../shared/storage/authStorage";
import { homeStyles as styles } from "../styles/home.styles";

export function HomeScreen({ navigation }: any) {
  const logout = async () => {
    await removeToken();
    navigation.replace("Auth");
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido a Farmacia</Text>
        <Text style={styles.subtitle}>Gracias por preferirnos</Text>
      </View>

      {/* Card de bienvenida */}
      <View style={styles.card}>
        <Text style={styles.welcome}>
          Bienvenido al sistema de gestión
        </Text>

        <Text style={styles.description}>
          Desde aquí podrás acceder a las funcionalidades principales
          de la aplicación.
        </Text>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
