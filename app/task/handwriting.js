// // // app/task/handwriting.js
// // import { router, useLocalSearchParams } from 'expo-router';
// // import { useEffect, useRef, useState } from 'react';
// // import {
// //   Alert,
// //   Image,
// //   Pressable,
// //   StyleSheet,
// //   Text,
// //   View
// // } from 'react-native';
// // import SignatureCanvas from 'react-native-signature-canvas';
// // import {
// //   getTaskById,
// //   saveBase64Image,
// //   updateTaskHandwriting
// // } from '../src/db/database';

// // export default function TaskHandwritingScreen() {
// //   const { taskId } = useLocalSearchParams();

// //   const signatureRef = useRef(null);
// //   const [task, setTask] = useState(null);
// //   const [previewUri, setPreviewUri] = useState(null);

// //   useEffect(() => {
// //     const foundTask = getTaskById(taskId);

// //     if (foundTask) {
// //       setTask(foundTask);
// //       setPreviewUri(foundTask.handwritingUri || null);
// //     }
// //   }, [taskId]);

// //   async function handleOK(signature) {
// //     try {
// //       const savedUri = await saveBase64Image(signature, 'task-handwriting');
// //       updateTaskHandwriting(taskId, savedUri);
// //       setPreviewUri(savedUri);

// //       Alert.alert('Saved', 'Handwriting saved successfully.');
// //     } catch (error) {
// //       Alert.alert(
// //         'Error',
// //         error.message || 'Failed to save handwriting'
// //       );
// //     }
// //   }

// //   function handleEmpty() {
// //     Alert.alert('Empty', 'Please draw something first.');
// //   }

// //   function handleClear() {
// //     setPreviewUri(null);
// //   }

// //   function handleSaveDrawing() {
// //     if (!signatureRef.current) return;
// //     signatureRef.current.readSignature();
// //   }

// //   if (!task) {
// //     return null;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Task Handwriting</Text>
// //       <Text style={styles.taskText}>{task.taskText}</Text>

// //       <View style={styles.canvasWrapper}>
// //         <SignatureCanvas
// //           ref={signatureRef}
// //           onOK={handleOK}
// //           onEmpty={handleEmpty}
// //           onClear={handleClear}
// //           autoClear={false}
// //           descriptionText="Draw your handwritten note here"
// //           clearText="Clear"
// //           confirmText="Save"
// //           penColor="#000000"
// //           backgroundColor="#ffffff"
// //           webStyle={`
// //             .m-signature-pad {
// //               box-shadow: none;
// //               border: none;
// //             }
// //             .m-signature-pad--footer {
// //               display: none;
// //               margin: 0px;
// //             }
// //             body, html {
// //               height: 100%;
// //             }
// //           `}
// //         />
// //       </View>

// //       <View style={styles.buttonRow}>
// //         <Pressable
// //           style={styles.secondaryButton}
// //           onPress={() => signatureRef.current?.clearSignature()}
// //         >
// //           <Text style={styles.secondaryButtonText}>Clear</Text>
// //         </Pressable>

// //         <Pressable
// //           style={styles.primaryButton}
// //           onPress={handleSaveDrawing}
// //         >
// //           <Text style={styles.primaryButtonText}>Save Drawing</Text>
// //         </Pressable>
// //       </View>

// //       {previewUri ? (
// //         <>
// //           <Text style={styles.previewLabel}>Saved Preview</Text>
// //           <Image
// //             source={{ uri: previewUri }}
// //             style={styles.previewImage}
// //             resizeMode="contain"
// //           />
// //         </>
// //       ) : null}

// //       <Pressable
// //         style={styles.doneButton}
// //         onPress={() => router.back()}
// //       >
// //         <Text style={styles.doneButtonText}>Back to Project</Text>
// //       </Pressable>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     padding: 16
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: '700',
// //     marginBottom: 8
// //   },
// //   taskText: {
// //     fontSize: 16,
// //     marginBottom: 16
// //   },
// //   canvasWrapper: {
// //     height: 320,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //     backgroundColor: '#fff'
// //   },
// //   buttonRow: {
// //     flexDirection: 'row',
// //     gap: 10,
// //     marginTop: 16
// //   },
// //   secondaryButton: {
// //     flex: 1,
// //     borderWidth: 1,
// //     borderColor: '#111',
// //     borderRadius: 10,
// //     padding: 14
// //   },
// //   secondaryButtonText: {
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   },
// //   primaryButton: {
// //     flex: 1,
// //     backgroundColor: '#111',
// //     borderRadius: 10,
// //     padding: 14
// //   },
// //   primaryButtonText: {
// //     color: '#fff',
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   },
// //   previewLabel: {
// //     fontWeight: '700',
// //     marginTop: 20,
// //     marginBottom: 8
// //   },
// //   previewImage: {
// //     width: '100%',
// //     height: 180,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 12,
// //     backgroundColor: '#fff'
// //   },
// //   doneButton: {
// //     backgroundColor: '#444',
// //     padding: 14,
// //     borderRadius: 10,
// //     marginTop: 16
// //   },
// //   doneButtonText: {
// //     color: '#fff',
// //     textAlign: 'center',
// //     fontWeight: '700'
// //   }
// // });


// // app/task/handwriting.js
// import { router, useLocalSearchParams } from 'expo-router';
// import { useEffect, useRef, useState } from 'react';
// import {
//   Alert,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import SignatureCanvas from 'react-native-signature-canvas';
// import {
//   getTaskById,
//   saveBase64Image,
//   updateTaskHandwriting
// } from '../src/db/database';

// export default function TaskHandwritingScreen() {
//   const { taskId } = useLocalSearchParams();

//   const signatureRef = useRef(null);
//   const [task, setTask] = useState(null);
//   const [previewUri, setPreviewUri] = useState(null);

//   useEffect(() => {
//     const foundTask = getTaskById(taskId);

//     if (foundTask) {
//       setTask(foundTask);
//       setPreviewUri(foundTask.handwritingUri || null);
//     }
//   }, [taskId]);

//   async function handleOK(signature) {
//     try {
//       const savedUri = await saveBase64Image(signature, 'task-handwriting');
//       updateTaskHandwriting(taskId, savedUri);
//       setPreviewUri(savedUri);
//       Alert.alert('Saved', 'Handwriting saved successfully.');
//     } catch (error) {
//       Alert.alert(
//         'Error',
//         error.message || 'Failed to save handwriting'
//       );
//     }
//   }

//   function handleEmpty() {
//     Alert.alert('Empty', 'Please draw something first.');
//   }

//   function handleError(error) {
//     console.log('Signature canvas error:', error);
//     Alert.alert(
//       'Canvas Error',
//       typeof error === 'string' ? error : 'The handwriting canvas failed to load.'
//     );
//   }

//   function handleSaveDrawing() {
//     signatureRef.current?.readSignature();
//   }

//   if (!task) {
//     return (
//       <View style={styles.center}>
//         <Text>Loading task...</Text>
//       </View>
//     );
//   }

//   return (
//      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
//     <View style={styles.container}>
//       <Text style={styles.title}>Task Handwriting</Text>
//       <Text style={styles.taskText}>{task.taskText}</Text>

//       <View style={styles.canvasWrapper}>
//         <SignatureCanvas
//           ref={signatureRef}
//           onOK={handleOK}
//           onEmpty={handleEmpty}
//           onError={handleError}
//           autoClear={false}
//           descriptionText="Draw here"
//           clearText="Clear"
//           confirmText="Save"
//           penColor="black"
//           backgroundColor="white"
//           webviewProps={{
//             androidLayerType: 'software',
//             cacheEnabled: false
//           }}
//         />
//       </View>

//       <View style={styles.buttonRow}>
//         <Pressable
//           style={styles.secondaryButton}
//           onPress={() => signatureRef.current?.clearSignature()}
//         >
//           <Text style={styles.secondaryButtonText}>Clear</Text>
//         </Pressable>

//         <Pressable
//           style={styles.primaryButton}
//           onPress={handleSaveDrawing}
//         >
//           <Text style={styles.primaryButtonText}>Save Drawing</Text>
//         </Pressable>
//       </View>

//       {previewUri ? (
//         <>
//           <Text style={styles.previewLabel}>Saved Preview</Text>
//           <Image
//             source={{ uri: previewUri }}
//             style={styles.previewImage}
//             resizeMode="contain"
//           />
//         </>
//       ) : null}

//       <Pressable
//         style={styles.doneButton}
//         onPress={() => router.back()}
//       >
//         <Text style={styles.doneButtonText}>Back to Project</Text>
//       </Pressable>
//     </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//     marginBottom: 8
//   },
//   taskText: {
//     fontSize: 16,
//     marginBottom: 16
//   },
//   canvasWrapper: {
//     height: 320,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     overflow: 'hidden',
//     backgroundColor: '#fff'
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     gap: 10,
//     marginTop: 16
//   },
//   secondaryButton: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#111',
//     borderRadius: 10,
//     padding: 14
//   },
//   secondaryButtonText: {
//     textAlign: 'center',
//     fontWeight: '700'
//   },
//   primaryButton: {
//     flex: 1,
//     backgroundColor: '#111',
//     borderRadius: 10,
//     padding: 14
//   },
//   primaryButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '700'
//   },
//   previewLabel: {
//     fontWeight: '700',
//     marginTop: 20,
//     marginBottom: 8
//   },
//   previewImage: {
//     width: '100%',
//     height: 180,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     backgroundColor: '#fff'
//   },
//   doneButton: {
//     backgroundColor: '#444',
//     padding: 14,
//     borderRadius: 10,
//     marginTop: 16
//   },
//   doneButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '700'
//   },
//    safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//     paddingBottom: 36, // extra space above Android home button
//   },

//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 16,
//     marginBottom: 24, // keeps buttons above home bar
//     paddingBottom: 12,
//   },
// });


// app/task/handwriting.js
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignatureCanvas from 'react-native-signature-canvas';
import {
  getTaskById,
  saveBase64Image,
  updateTaskHandwriting
} from '../src/db/database';

export default function TaskHandwritingScreen() {
  const { taskId } = useLocalSearchParams();

  const signatureRef = useRef(null);
  const [task, setTask] = useState(null);
  const [previewUri, setPreviewUri] = useState(null);

  useEffect(() => {
    const foundTask = getTaskById(taskId);

    if (foundTask) {
      setTask(foundTask);
      setPreviewUri(foundTask.handwritingUri || null);
    }
  }, [taskId]);

  async function handleOK(signature) {
    try {
      const savedUri = await saveBase64Image(signature, 'task-handwriting');
      updateTaskHandwriting(taskId, savedUri);
      setPreviewUri(savedUri);

      Alert.alert('Saved', 'Handwriting saved successfully.');
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Failed to save handwriting'
      );
    }
  }

  function handleEmpty() {
    Alert.alert('Empty', 'Please draw something first.');
  }

  function handleError(error) {
    console.log('Signature canvas error:', error);
    Alert.alert(
      'Canvas Error',
      typeof error === 'string'
        ? error
        : 'The handwriting canvas failed to load.'
    );
  }

  function handleSaveDrawing() {
    signatureRef.current?.readSignature();
  }

  if (!task) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <View style={styles.center}>
          <Text>Loading task...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.container}>
        <Text style={styles.title}>Task Handwriting</Text>
        <Text style={styles.taskText}>{task.taskText}</Text>

        <View style={styles.canvasWrapper}>
          <SignatureCanvas
            ref={signatureRef}
            onOK={handleOK}
            onEmpty={handleEmpty}
            onError={handleError}
            autoClear={false}
            descriptionText="Draw here"
            clearText="Clear"
            confirmText="Save"
            penColor="black"
            backgroundColor="white"
            webviewProps={{
              androidLayerType: 'software',
              cacheEnabled: false
            }}
          />
        </View>

        <View style={styles.buttonRow}>
          <Pressable
            style={styles.secondaryButton}
            onPress={() => signatureRef.current?.clearSignature()}
          >
            <Text style={styles.secondaryButtonText}>Clear</Text>
          </Pressable>

          <Pressable
            style={styles.primaryButton}
            onPress={handleSaveDrawing}
          >
            <Text style={styles.primaryButtonText}>Save Drawing</Text>
          </Pressable>
        </View>

        {previewUri ? (
          <>
            <Text style={styles.previewLabel}>Saved Preview</Text>
            <Image
              source={{ uri: previewUri }}
              style={styles.previewImage}
              resizeMode="contain"
            />
          </>
        ) : null}

        <Pressable
          style={styles.doneButton}
          onPress={() => router.back()}
        >
          <Text style={styles.doneButtonText}>Back to Project</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingBottom: 36
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8
  },
  taskText: {
    fontSize: 16,
    marginBottom: 16
  },
  canvasWrapper: {
    height: 320,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
    marginBottom: 24,
    paddingBottom: 12
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 10,
    padding: 14
  },
  secondaryButtonText: {
    textAlign: 'center',
    fontWeight: '700'
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 14
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  previewLabel: {
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 8
  },
  previewImage: {
    width: '100%',
    height: 180,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: '#fff'
  },
  doneButton: {
    backgroundColor: '#444',
    padding: 14,
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 8
  },
  doneButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});