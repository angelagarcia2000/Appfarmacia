import { View, Text, TouchableOpacity, Image } from "react-native";
import { homeStyles as styles } from "../styles/home.styles";

export function PermissionsScreen({ navigation }: any) {
  return (
    <View style={styles.permissionsContainer}>
      {/* ICONO / ILUSTRACIÓN */}
      <Image
        source={require("../../shared/assets/location_permission.png")}
        style={styles.permissionsIcon}
      />

      {/* TÍTULO */}
      <Text style={styles.permissionsTitle}>
        Permisos y uso responsable
      </Text>

      {/* TEXTO INFORMATIVO */}
      <View style={styles.permissionsCard}>
        <Text style={styles.permissionsText}>
          Farmacia el Descuento es una aplicación diseñada para facilitar
          el acceso a medicamentos, la gestión de tratamientos y la consulta
          de información confiable para el cuidado de tu salud.
        </Text>

        <Text style={styles.permissionsText}>
          Para ofrecer una mejor experiencia, la aplicación puede solicitar
          acceso a la ubicación del dispositivo y a notificaciones. Estos
          permisos permiten mostrar sucursales cercanas, disponibilidad de
          medicamentos y enviar recordatorios de tomas o pedidos. Tu
          información se utiliza únicamente para brindar el servicio y no se
          comparte sin tu consentimiento.
        </Text>
      </View>

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.permissionsButton}
        onPress={() => navigation.navigate("Access")}
        activeOpacity={0.85}
      >
        <Text style={styles.permissionsButtonText}>
          Aceptar y continuar
        </Text>
      </TouchableOpacity>

      {/* FOOTER */}
      <Text style={styles.permissionsFooter}>
        Al continuar, aceptas los términos y condiciones y la política de privacidad
      </Text>
    </View>
  );
}
