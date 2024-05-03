import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native"; 
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [stockData, setStockData] = useState([]);

  const fetchStockData = async () => {
    try {
      const response = await axios.get(
        `https://cloud.iexapis.com/stable/stock/IBM/chart/5dm?token=pk_07dadb5c94594ea38b79c6f7f2ac2418`
      );

      if (response.status === 200) {
        const stockData = response.data;
        setStockData(stockData);
      } else {
        throw new Error("Error al obtener los datos de acciones");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);


  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: "#007bff", 
        },
        headerTintColor: "#fff", 
      });
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.data}>{item.open} - {item.close}</Text>
      <Text style={styles.data}>{item.volume}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Stock Data</Text>
    <View style={styles.tableContainer}>
      <View style={styles.columnHeaders}>
        <Text style={[styles.columnHeader, { backgroundColor: "#007bff", color: "#fff" }]}>Date</Text>
        <Text style={[styles.columnHeader, { backgroundColor: "#007bff", color: "#fff" }]}>Price</Text>
        <Text style={[styles.columnHeader, { backgroundColor: "#007bff", color: "#fff" }]}>Volume</Text>
      </View>
      <FlatList
        data={stockData.map((entry, index) => ({
          id: `${entry.date}-${index}`,
          date: entry.date,
          open: entry.open,
          close: entry.close,
          volume: entry.volume,
        }))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} 
      />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  columnHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    backgroundColor: "#007bff", 
  },
  tableContainer: {
    borderWidth: 1, // Añade un borde alrededor de la tabla
    borderColor: "#ccc", // Color del borde
    borderRadius: 5, // Añade esquinas redondeadas al borde
    overflow: "hidden", // Evita que los bordes redondeados se solapen con los elementos dentro de la tabla
  },
  columnHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 10, 
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  data: {
    fontSize: 16,
  },
});
