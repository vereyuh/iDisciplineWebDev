import { StyleSheet } from "react-native";

const createnewstudentstyle = StyleSheet.create({
    formPanel: {
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: "45%", // matches the width in the screenshot
        backgroundColor: "#fff",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        padding: 20,
        zIndex: 999,
    },

    formHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0072E1",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderTopLeftRadius: 16,
        marginTop: -20,
        marginHorizontal: -20,
    },

    formTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    uploadBox: {
        alignSelf: "center",
        width: 100,
        height: 100,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        backgroundColor: "#f9f9f9",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
    },

    uploadText: {
        color: "#999",
        textAlign: "center",
        fontSize: 12,
    },

    formBody: {
        paddingHorizontal: 4,
        marginBottom: 20,
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 12,
        paddingVertical: 6,
        fontSize: 14,
        color: "#333",
    },

    addButton: {
        backgroundColor: "#14C18B",
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
    },

    addButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    // Optional styling for the "Emergency Contact" title
    emergencyTitle: {
        color: "#1A237E",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 20,
        marginBottom: 6,
    },
});

export default createnewstudentstyle;