import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useAuthViewModel } from "../../viewmodel/AuthViewModel";

export function RegisterScreen({ navigation }: any) {
  const { register, loading, error } = useAuthViewModel();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const success = await register(username.trim(), email.trim(), password);
    if (success) navigation.goBack();
  };

  const isValid =
    username.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0;

  return (
    <View>
      <Text>Registro de Usuario</Text>

      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title={loading ? "Registrando..." : "Registrar"}
        disabled={loading || !isValid}
        onPress={handleRegister}
      />

      {error && <Text>{error}</Text>}
    </View>
  );
}
