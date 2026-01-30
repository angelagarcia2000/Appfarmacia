import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    padding: 24,
  },

  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  appTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#38BDF8",
  },

  subtitle: {
    fontSize: 14,
    color: "#CBD5E1",
  },

  card: {
    backgroundColor: "#020617",
    padding: 24,
    borderRadius: 18,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#E5E7EB",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#1E293B",
    borderRadius: 12,
    paddingHorizontal: 14,
    color: "#E5E7EB",
    marginBottom: 14,
    fontSize: 15,
  },

  button: {
    backgroundColor: "#38BDF8",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonDisabled: {
    backgroundColor: "#64748B",
  },

  buttonText: {
    color: "#020617",
    fontSize: 16,
    fontWeight: "bold",
  },

  error: {
    color: "#F87171",
    textAlign: "center",
    marginBottom: 8,
  },

  link: {
    marginTop: 18,
    alignItems: "center",
  },

  linkText: {
    color: "#94A3B8",
    fontSize: 14,
  },

  linkBold: {
    color: "#38BDF8",
    fontWeight: "600",
  },
});
