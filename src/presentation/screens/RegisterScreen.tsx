import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { useAuthViewModel } from "../../viewmodel/AuthViewModel";
import { registerStyles as styles } from "../styles/register.styles";

export function RegisterScreen({ navigation }: any) {
  const { register, loading, error } = useAuthViewModel();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const success = await register(
      username.trim(),
      email.trim(),
      password
    );
    if (success) navigation.goBack();
  };

  const isValid =
    username.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Farmacia</Text>
        <Text style={styles.subtitle}>Crear cuenta</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Registro de usuario</Text>

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
          placeholder="Correo electrónico"
          placeholderTextColor="#94A3B8"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>
            {loading ? "Registrando..." : "Crear cuenta"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.linkText}>
            ¿Ya tienes cuenta?{" "}
            <Text style={styles.linkBold}>Inicia sesión</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
