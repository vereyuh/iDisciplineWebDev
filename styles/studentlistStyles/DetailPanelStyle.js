import { StyleSheet } from "react-native";

const detailpanelstyle = StyleSheet.create({
    detailPanel: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        backgroundColor: "#fff",
        zIndex: 99,
        padding: 20,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
      },
      
      detailHeader: {
        backgroundColor: "#0072E1",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        borderTopLeftRadius: 16,
        marginTop: -20,
        marginHorizontal: -20,
      },
      
      detailTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },
      
      editButton: {
        backgroundColor: "#FFC107",
        alignSelf: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
      },
      
      editButtonText: {
        fontWeight: "bold",
        color: "#fff",
      },
      
      card: {
        backgroundColor: "#f8f8f8",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
      },
      
      studentInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      },
      
      avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: "#ccc",
        marginRight: 12,
      },
      
      nameText: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 4,
      },
      
      smallText: {
        fontSize: 12,
        color: "#555",
      },
      
      cardTitle: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 6,
      },
      
      link: {
        color: "#0072E1",
        fontWeight: "bold",
        fontSize: 14,
      },
});

export default detailpanelstyle;