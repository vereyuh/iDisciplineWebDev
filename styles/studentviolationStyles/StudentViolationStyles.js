import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0072E1",
    marginRight: 8,
  },

  countBubble: {
    backgroundColor: "#EAF2FA",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  countText: {
    color: "#0072E1",
    fontWeight: "600",
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  searchFilterRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    width: 250, // shortened width
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  dropdownText: {
    marginRight: 4,
    fontSize: 14,
    fontWeight: "500",
  },

  filterChip: {
    backgroundColor: "#0072E1",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  filterChipActive: {
    backgroundColor: "#005bb5",
  },

  filterChipText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },

  filterChipTextActive: {
    fontWeight: "bold",
  },

  addButton: {
    backgroundColor: "#14C18B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 12,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 6,
  },

  tableHeaderCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 13,
    color: "#555",
    textAlign: "center",
  },

  violationRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  statusCell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  statusText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
  },

  resolved: {
    color: "#14C18B",
  },

  unresolved: {
    color: "#FFC107",
  },

  cell: {
    flex: 1,
    fontSize: 13,
    textAlign: "center",
    color: "#333",
  },
});

export default styles;
