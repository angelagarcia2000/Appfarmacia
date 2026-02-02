import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { getUsername, removeToken } from "../../shared/storage/authStorage";
import { homeStyles as styles } from "../styles/home.styles";

/* Acciones principales de Farmacia el Descuento */
const actions = [
  {
    id: 1,
    title: "Medicamentos",
    description: "Consulta disponibilidad y detalles de medicamentos",
    icon: require("../../shared/assets/destinations.png"),
    screen: "Medicines",
  },
  {
    id: 2,
    title: "Sucursales",
    description: "Ubica farmacias cercanas y horarios de atención",
    icon: require("../../shared/assets/map.png"),
    screen: "Branches",
  },
  {
    id: 3,
    title: "Mis tratamientos",
    description: "Gestiona recordatorios y tomas de medicación",
    icon: require("../../shared/assets/favorite.png"),
    screen: "Treatments",
  },
  {
    id: 4,
    title: "Información",
    description: "Dosis, indicaciones y recomendaciones de uso",
    icon: require("../../shared/assets/review.png"),
    screen: "Info",
  },
];

export function HomeScreen({ navigation }: any) {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    getUsername().then(setUsername);
  }, []);

  const logout = async () => {
    await removeToken();
    navigation.replace("Auth");
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../shared/assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Farmacia el Descuento</Text>

        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutMini}>Salir</Text>
        </TouchableOpacity>
      </View>

      {/* BIENVENIDA */}
      <Text style={styles.subtitle}>
        Hola{username ? `, ${username}` : ""}
      </Text>

      {/* MENSAJE PRINCIPAL */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          💊 Tu salud, más cerca y sin filas
        </Text>
      </View>

      {/* ACCIONES PRINCIPALES */}
      <FlatList
        data={actions}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <View style={styles.productGridCard}>
            <Image
              source={item.icon}
              style={styles.productImage}
              accessibilityLabel={item.title}
            />

            <Text style={styles.productName}>
              {item.title}
            </Text>

            <Text style={styles.productPrice}>
              {item.description}
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.85}
            >
              <Text style={styles.addButtonText}>
                Ver más
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
}
