import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useAuthViewModel } from "../../viewmodel/AuthViewModel";

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
    <View>
      <Text>Farmacia</Text>

      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title={loading ? "Ingresando..." : "Login"}
        disabled={loading || !isValid}
        onPress={handleLogin}
      />

      {error && <Text>{error}</Text>}

      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
