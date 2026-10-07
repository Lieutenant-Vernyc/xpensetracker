import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
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
import {
  deleteExpense,
  getExpenseById,
  saveImage,
  updateExpense
} from '../../src/db/database';

const CATEGORY_OPTIONS = [
  'Purchase',
  'Auction Fee',
  'DMV',
  'Parts',
  'Labor',
  'Transport',
  'Misc'
];

export default function EditExpenseScreen() {
  const { id } = useLocalSearchParams();

  const [form, setForm] = useState(null);
  const [receiptUri, setReceiptUri] = useState(null);

  useEffect(() => {
    const expense = getExpenseById(id);

    if (expense) {
      setForm({
        ...expense,
        amount: String(expense.amount || ''),
        expenseDate: expense.expenseDate || ''
      });
      setReceiptUri(expense.receiptUri || null);
    }
  }, [id]);

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
    if (!form.expenseName.trim()) {
      Alert.alert(
        'Expense Name Required',
        'Please enter a name for this expense.'
      );
      return;
    }

    try {
      let finalReceipt = receiptUri;

      if (receiptUri && !receiptUri.includes('/receipts/')) {
        finalReceipt = await saveImage(receiptUri, 'receipts');
      }

      updateExpense({
        ...form,
        receiptUri: finalReceipt
      });

      router.back();
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Failed to update expense'
      );
    }
  }

  function handleDelete() {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteExpense(id);
            router.back();
          }
        }
      ]
    );
  }

  if (!form) {
    return null;
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
        value={form.expenseName}
        onChangeText={(text) =>
          setForm({ ...form, expenseName: text })
        }
      />

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryWrap}>
        {CATEGORY_OPTIONS.map((item) => (
          <Pressable
            key={item}
            style={[
              styles.categoryButton,
              form.category === item && styles.categoryButtonActive
            ]}
            onPress={() => setForm({ ...form, category: item })}
          >
            <Text
              style={[
                styles.categoryButtonText,
                form.category === item && styles.categoryButtonTextActive
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        style={styles.input}
        value={form.category || ''}
        placeholder="Or type your own category"
        onChangeText={(text) =>
          setForm({ ...form, category: text })
        }
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={form.amount}
        onChangeText={(text) =>
          setForm({ ...form, amount: text })
        }
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={form.expenseDate}
        onChangeText={(text) =>
          setForm({ ...form, expenseDate: text })
        }
      />

      <Text style={styles.label}>Vendor</Text>
      <TextInput
        style={styles.input}
        value={form.vendor || ''}
        onChangeText={(text) =>
          setForm({ ...form, vendor: text })
        }
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.notes]}
        multiline
        value={form.notes || ''}
        onChangeText={(text) =>
          setForm({ ...form, notes: text })
        }
      />

      <Pressable
        style={styles.receiptButton}
        onPress={pickReceipt}
      >
        <Text>Change Receipt Photo</Text>
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
        <Text style={styles.saveText}>Save Changes</Text>
      </Pressable>

      <Pressable
        style={styles.deleteButton}
        onPress={handleDelete}
      >
        <Text style={styles.deleteText}>Delete Expense</Text>
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
  },
  deleteButton: {
    backgroundColor: '#b00020',
    padding: 16,
    borderRadius: 12,
    marginTop: 12
  },
  deleteText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});
