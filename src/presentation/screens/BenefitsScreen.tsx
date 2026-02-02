import { View, Text, TouchableOpacity, Image } from "react-native";
import { homeStyles as styles } from "../styles/home.styles";

export function BenefitsScreen({ navigation }: any) {
  return (
    <View style={styles.benefitsContainer}>
      {/* TÍTULO */}
      <Text style={styles.benefitsTitle}>
        ¿Por qué usar Farmacia el Descuento?
      </Text>

      <Text style={styles.benefitsSubtitle}>
        Accede a tus medicamentos, gestiona tus tratamientos y ahorra tiempo desde una sola app
      </Text>

      {/* CARDS DE BENEFICIOS */}
      <View style={styles.benefitsGrid}>
        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/destinations.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Disponibilidad en tiempo real
          </Text>
          <Text style={styles.benefitText}>
            Consulta si un medicamento está en stock antes de ir a la farmacia.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/map.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Sucursales cercanas
          </Text>
          <Text style={styles.benefitText}>
            Ubica nuestras sucursales, horarios de atención y servicios disponibles.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/favorite.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Recordatorios de medicación
          </Text>
          <Text style={styles.benefitText}>
            Recibe alertas para tomar tus medicamentos a tiempo y no olvidar dosis.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Image
            source={require("../../shared/assets/review.png")}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitTitle}>
            Información confiable
          </Text>
          <Text style={styles.benefitText}>
            Consulta indicaciones, dosis y recomendaciones de uso de tus medicamentos.
          </Text>
        </View>
      </View>

      {/* BOTÓN CONTINUAR */}
      <TouchableOpacity
        style={styles.benefitsButton}
        onPress={() => navigation.navigate("Permissions")}
        activeOpacity={0.85}
      >
        <Text style={styles.benefitsButtonText}>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
