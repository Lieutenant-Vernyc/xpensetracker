import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  addTask,
  getTaskById,
  updateTask
} from '../../src/db/database';

const PRIORITIES = ['Low', 'Medium', 'High'];

export default function AddTaskScreen() {
  const { projectId, taskId } = useLocalSearchParams();

  const [taskText, setTaskText] = useState('');
  const [notes, setNotes] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [existingHandwritingUri, setExistingHandwritingUri] = useState(null);

  useEffect(() => {
    if (!taskId) return;

    const existingTask = getTaskById(taskId);

    if (existingTask) {
      setTaskText(existingTask.taskText || '');
      setNotes(existingTask.notes || '');
      setPriority(existingTask.priority || 'Medium');
      setExistingHandwritingUri(existingTask.handwritingUri || null);
    }
  }, [taskId]);

  function handleSave() {
    if (!taskText.trim()) {
      Alert.alert(
        'Task required',
        'Please enter a task.'
      );
      return;
    }

    try {
      if (taskId) {
        updateTask({
          id: taskId,
          taskText,
          notes,
          priority,
          handwritingUri: existingHandwritingUri
        });
      } else {
        addTask({
          projectId,
          taskText,
          notes,
          priority,
          isDone: 0,
          handwritingUri: null
        });
      }

      router.back();
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Failed to save task'
      );
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>
        {taskId ? 'Edit Task' : 'Add Task'}
      </Text>

      <Text style={styles.label}>Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Example: Replace front bumper"
        value={taskText}
        onChangeText={setTaskText}
      />

      <Text style={styles.label}>Priority</Text>
      <View style={styles.priorityWrap}>
        {PRIORITIES.map((item) => (
          <Pressable
            key={item}
            style={[
              styles.priorityButton,
              priority === item && styles.priorityButtonActive
            ]}
            onPress={() => setPriority(item)}
          >
            <Text
              style={[
                styles.priorityButtonText,
                priority === item && styles.priorityButtonTextActive
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Optional notes"
        multiline
        value={notes}
        onChangeText={setNotes}
      />

      <Pressable
        style={styles.saveButton}
        onPress={handleSave}
      >
        <Text style={styles.saveButtonText}>
          {taskId ? 'Save Changes' : 'Save Task'}
        </Text>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12
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
  notesInput: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  priorityWrap: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12
  },
  priorityButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 10,
    paddingVertical: 12
  },
  priorityButtonActive: {
    backgroundColor: '#111'
  },
  priorityButtonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#111'
  },
  priorityButtonTextActive: {
    color: '#fff'
  },
  saveButton: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    marginTop: 16
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});
