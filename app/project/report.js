// app/project/report.js
import { useLocalSearchParams } from 'expo-router';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import {
  getExpenses,
  getProject,
  getProjectTotals
} from '../src/db/database';

export default function ProjectReportScreen() {
  const { id } = useLocalSearchParams();

  async function createReport() {
    const project = getProject(id);
    const expenses = getExpenses(id);
    const totals = getProjectTotals(id);

    const html = `
      <html>
        <body style="font-family: Arial; padding: 20px;">
          <h1>${project.year} ${project.make} ${project.model}</h1>

          <p><strong>VIN:</strong> ${project.vin || ''}</p>
          <p><strong>Auction:</strong> ${project.auctionSource || ''}</p>
          <p><strong>Purchase Price:</strong> $${Number(project.purchasePrice || 0).toFixed(2)}</p>
          <p><strong>Sale Price:</strong> $${Number(project.salePrice || 0).toFixed(2)}</p>

          <h2>Expenses</h2>

          <table border="1" cellspacing="0" cellpadding="8" width="100%">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Vendor</th>
              <th>Amount</th>
            </tr>

            ${expenses.map((expense) => `
              <tr>
                <td>${expense.expenseName}</td>
                <td>${expense.category || ''}</td>
                <td>${expense.vendor || ''}</td>
                <td>$${Number(expense.amount || 0).toFixed(2)}</td>
              </tr>
            `).join('')}
          </table>

          <h2>Summary</h2>

          <p><strong>Total Expenses:</strong> $${totals.totalExpenses.toFixed(2)}</p>
          <p><strong>Total Invested:</strong> $${totals.totalInvested.toFixed(2)}</p>
          <p><strong>Profit:</strong> $${totals.profit.toFixed(2)}</p>
        </body>
      </html>
    `;

    try {
      const result = await Print.printToFileAsync({
        html
      });

      await Sharing.shareAsync(result.uri);
    } catch (error) {
      Alert.alert('Error', 'Could not generate report');
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={createReport}>
        <Text style={styles.buttonText}>
          Generate & Share PDF Report
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#111',
    padding: 18,
    borderRadius: 12
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});