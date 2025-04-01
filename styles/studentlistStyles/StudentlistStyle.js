import { StyleSheet } from "react-native";

const slstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0072E1",
  },

  countBubble: {
    backgroundColor: "#E7F1FF",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 6,
  },

  countText: {
    color: "#0072E1",
    fontWeight: "bold",
  },

  searchInput: {
    flex: 1,
    marginLeft: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },

  icon: {
    marginLeft: 10,
    color: "#0072E1",
  },

  filterBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  dropdownText: {
    marginRight: 4,
    fontWeight: "500",
  },

  addButton: {
    backgroundColor: "#14C18B",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },

  tableHeader: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f4f6f9",
  },

  tableHeaderCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },

  studentRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  checkbox: {
    marginHorizontal: 4,
    color: "#673ab7",
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 6,
    backgroundColor: "#ccc",
  },

  cell: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },


});

export default slstyles;
