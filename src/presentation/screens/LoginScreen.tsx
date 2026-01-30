import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useAuthViewModel } from "../../viewmodel/AuthViewModel";
import { loginStyles as styles } from "../styles/login.styles";

export function LoginScreen({ navigation }: any) {
  const { login, loading, error } = useAuthViewModel();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await login(username.trim(), password);
    if (success) navigation.replace("Home");
  };

  const isValid = username.trim().length > 0 && password.length > 0;

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Farmacia</Text>
        <Text style={styles.subtitle}>Sistema de Gestión</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Iniciar sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#94A3B8"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity
          style={[
            styles.button,
            (!isValid || loading) && styles.buttonDisabled,
          ]}
          disabled={!isValid || loading}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            {loading ? "Ingresando..." : "Ingresar"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.linkText}>
            ¿No tienes cuenta?{" "}
            <Text style={styles.linkBold}>Regístrate</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
