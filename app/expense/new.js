import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addExpense, saveImage } from '../../src/db/database';

const CATEGORY_OPTIONS = [
  'Purchase',
  'Auction Fee',
  'DMV',
  'Parts',
  'Labor',
  'Transport',
  'Misc'
];

export default function AddExpenseScreen() {
  const { projectId } = useLocalSearchParams();

  const [expenseName, setExpenseName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [vendor, setVendor] = useState('');
  const [notes, setNotes] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [receiptUri, setReceiptUri] = useState(null);

  async function pickReceipt() {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Permission required',
        'Please allow access to your photos.'
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7
    });

    if (!result.canceled) {
      setReceiptUri(result.assets[0].uri);
    }
  }

  async function handleSave() {
    if (!expenseName.trim()) {
      Alert.alert(
        'Expense Name Required',
        'Please enter a name for this expense.'
      );
      return;
    }

    try {
      let savedReceipt = null;

      if (receiptUri) {
        savedReceipt = await saveImage(receiptUri, 'receipts');
      }

      addExpense({
        projectId,
        expenseName,
        category,
        amount,
        vendor,
        notes,
        receiptUri: savedReceipt,
        expenseDate
      });

      router.back();
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Failed to save expense'
      );
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.label}>Expense Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Example: Front bumper, DMV fee, Engine oil"
        value={expenseName}
        onChangeText={setExpenseName}
      />

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryWrap}>
        {CATEGORY_OPTIONS.map((item) => (
          <Pressable
            key={item}
            style={[
              styles.categoryButton,
              category === item && styles.categoryButtonActive
            ]}
            onPress={() => setCategory(item)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                category === item && styles.categoryButtonTextActive
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Or type your own category"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={expenseDate}
        onChangeText={setExpenseDate}
      />

      <Text style={styles.label}>Vendor</Text>
      <TextInput
        style={styles.input}
        placeholder="eBay, LKQ, AutoZone, DMV"
        value={vendor}
        onChangeText={setVendor}
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.notes]}
        placeholder="Additional notes"
        multiline
        value={notes}
        onChangeText={setNotes}
      />

      <Pressable
        style={styles.receiptButton}
        onPress={pickReceipt}
      >
        <Text>Add Receipt Photo</Text>
      </Pressable>

      {receiptUri ? (
        <Image
          source={{ uri: receiptUri }}
          style={styles.receiptImage}
        />
      ) : null}

      <Pressable
        style={styles.saveButton}
        onPress={handleSave}
      >
        <Text style={styles.saveText}>Save Expense</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 120
  },
  label: {
    fontWeight: '700',
    marginBottom: 6,
    marginTop: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12
  },
  notes: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  categoryWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14
  },
  categoryButtonActive: {
    backgroundColor: '#111'
  },
  categoryButtonText: {
    color: '#111',
    fontWeight: '700'
  },
  categoryButtonTextActive: {
    color: '#fff'
  },
  receiptButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center'
  },
  receiptImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginTop: 12
  },
  saveButton: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    marginTop: 16
  },
  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});
