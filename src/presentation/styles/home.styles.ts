import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
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

  title: {
    fontSize: 30,
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

  welcome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#E5E7EB",
    marginBottom: 12,
    textAlign: "center",
  },

  description: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 24,
  },

  logoutButton: {
    backgroundColor: "#EF4444",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#F8FAFC",
    fontSize: 16,
    fontWeight: "bold",
  },
});
